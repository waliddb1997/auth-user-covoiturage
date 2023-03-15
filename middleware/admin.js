// module.exports = async (req, res, next) => {
//     try {
    
//       if (req.user.Role == 'admin') {
//         next();
//       } else {
//         res.status(401).json({
//           message: "not allowed" 
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(401).json({  
//         message: "admin authentication failed",
//       });
//     }
//   };