module.exports = (req, res) => {
  if (req.method === 'POST') {
    return res.status(200).json({
      status: "success",
      message: "وصلت الرسالة يا بن حسن، السيرفر شغال 100%"
    });
  } else {
    res.status(200).send("سيرفر عبد الرحمن جاهز! أرسل بياناتك من الكالي.");
  }
};
