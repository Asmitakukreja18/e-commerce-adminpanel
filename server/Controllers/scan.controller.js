
import Tesseract from "tesseract.js";
import Product from "../Models/Product.js";
import Cart from "../Models/Cart.js";

const normalize = (word) => {
  return word
    .toLowerCase()
    .replace(/s$/, "")        
    .replace("carton", "")    
    .trim();
};

export const scanImage = async (req, res) => {
  try {
    const { cartId } = req.body;
    if (!req.file || !cartId) {
      return res.status(400).json({ message: "Image & cartId required" });
    }

    const result = await Tesseract.recognize(req.file.path, "eng");
    const rawText = result.data.text;

    let items = rawText
      .split("\n")
      .map((t) => normalize(t))
      .filter((t) => t.length > 2);

    let found = [];
    let notFound = [];

    let cart = await Cart.findOne({ cartId });
    if (!cart) {
      cart = new Cart({ cartId, items: [], totalAmount: 0 });
    }

    for (let item of items) {
      const product = await Product.findOne({
        name: { $regex: item, $options: "i" },
        isActive: true,
      });

      if (product) {
        const variant = product.variants?.[0];

        cart.items.push({
          productId: product._id,
          name: product.name,
          variant: variant?.name || "default",
          price: variant?.price || 0,
          quantity: 1,
          image: product.images?.[0],
        });

        found.push(product.name);
      } else {
        notFound.push(item);
      }
    }

  
    cart.totalAmount = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    await cart.save();

    res.json({
      message: "Scan successful",
      addedItems: found,
      notFound,
      cart,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
