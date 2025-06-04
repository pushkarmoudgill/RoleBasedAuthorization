const authorizeRole =(...allowedRoles)=>{
    return (req,res,next)=>{
      if (!allowedRoles.includes(req.user.role)) {
            return res.status(500).json({ message: "Not authorized." });
        }
        next();
    }
}

module.exports={ authorizeRole};
