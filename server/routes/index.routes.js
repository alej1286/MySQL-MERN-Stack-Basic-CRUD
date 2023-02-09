import { Router } from "express";

const router = Router();

router.get(`/ping`,async(req,res)=>{

//const result = await pool.query(`select 1+1 as result`);

console.log(result)
res.json(`ping`)

});

export default router;