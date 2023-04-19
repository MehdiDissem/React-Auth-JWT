import { useEffect } from "react";
import { useHistory } from "react-router-dom";


export const PleaseVerifyEmailPage = ()=>{
    const history = useHistory()

    useEffect(()=>{
        setTimeout(()=>{
            history.push('/')
        },3000)
    }, [history])

    return (
        <div className="content-container">
            <h1>Thanks for signing Up!</h1>
            <p>
                Email sent, please go verify it to unlock full site features.
            </p>
        </div>
    )
}