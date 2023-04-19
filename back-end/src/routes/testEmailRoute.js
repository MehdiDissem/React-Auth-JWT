
import { sendEmail } from '../util/sendEmail'

export const testEmailRoute = {
    path:'/api/test-email',
    method:'post',
    handler: async (req,res)=>{
        try{
            await sendEmail({
                to:'mehdissem+test1@gmail.com',
                from:'mehdissem@gmail.com',
                subject:'does this work?',
                text:'if u re reading this, it works'
            })
            res.sendStatus(200)
        } catch(e){
            console.log(e)
            res.sendStatus(500)
        }
    }

}
