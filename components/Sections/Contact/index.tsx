import React, {useState,useEffect,useRef} from "react";
import { GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import * as EmailValidator from 'email-validator';

import emailjs from '@emailjs/browser';

interface contactProps{
    emailServiceID:string,
    emailTemplateID:string,
    emailKey:string,
    googleMapsKey:string,
    googleMapID:string,
}
const Contact:React.FC<contactProps> = ({emailServiceID,emailTemplateID,emailKey,googleMapsKey,googleMapID})=>{
    const form = useRef<HTMLFormElement>(null);
    const [values,setValues] = useState({
        user_name:'',
        user_email:'',
        message:''
    });
    const [valuesError,setValuesError] = useState({
        userNameError:false,
        emailError:false,
        messageError:false
    });
    const { userNameError,emailError,messageError }=valuesError;
    const [googleLat,setGoogleLat]=useState(0);

    const id = [googleMapID]

    const { isLoaded } = useLoadScript({
        googleMapsApiKey:googleMapsKey,
        mapIds:id,
    });

    const handleChange = (event:any) =>{
        setValuesError({userNameError:false,emailError:false,messageError:false});
        const {name,value}=event.target;
        setValues({...values,[name]:value});
    };

    const sendEmail = (e:any) => {
        e.preventDefault();
        let userName=values.user_name;
        let email=values.user_email;
        let message=values.message;
        // alert(userName.length);
        if(userName.length==0&&!EmailValidator.validate(email)&&message.length==0){
            setValuesError({...valuesError,['userNameError']:true,['emailError']:true,['messageError']:true});
        }
        else if(userName.length==0&&!EmailValidator.validate(email)){
            setValuesError({...valuesError,['userNameError']:true,['emailError']:true});
        }
        else if(userName.length==0&&message.length==0){
            setValuesError({...valuesError,['userNameError']:true,['messageError']:true});
        }
        else if(!EmailValidator.validate(email)&&message.length==0){
            setValuesError({...valuesError,['emailError']:true,['messageError']:true});
        }
        else if(userName.length==0){
            setValuesError({...valuesError,['userNameError']:true});
        }
        else if(!EmailValidator.validate(email)){
            setValuesError({...valuesError,['emailError']:true});
        }
        else if(message.length==0){
            setValuesError({...valuesError,['messageError']:true});
        }
        else{
            emailjs.sendForm(emailServiceID, emailTemplateID, form.current, emailKey)
            .then(function(response:any) {
                // console.log('SUCCESS!', response.status, response.text);
            }, function(error:any) {
                // console.log('FAILED...', error);
            });
            // e.target.reset();
            setValues({
                user_name:'',
                user_email:'',
                message:''
            });
        }
      };
    

    useEffect(()=>{
        const resize = ()=>{
            if(window.innerWidth<=768){
                setGoogleLat(34.40);
            }
            else{
                setGoogleLat(34.05);
            }
        };
        resize();
        window.addEventListener('resize',resize);
        ()=>{
            window.removeEventListener('resize',resize);
        };
    },[]);

    
    return (
        <section id="contact" className="relative flex justify-center min-h-[790px]">
            <div className="lg:w-[55%] xl:w-1/2 w-full px-4 lg:px-10 pt-10 lg:bg-[#1b1b1b]">
                <div className="card z-10 bg-[#1b1b1b] px-10 py-10 text-white">
                    <h1 className="text-4xl xs:text-5xl md:text-6xl mb-10">Contact</h1>
                    <form className="bg-[#1b1b1b] text-white" ref={form} onSubmit={sendEmail}>
                        <div className="relative flex w-full mb-2">
                            <label htmlFor="user_name" className="text-xl mr-2">Name:</label>
                            <input type="text" name="user_name"
                             className={`bg-[#1b1b1b] border-b-2 flex-1 text-xl w-0 ${userNameError?'border-red-500':'border-white'}`}
                             value={values.user_name}
                             onChange={handleChange}/>
                        </div>
                        <div className="flex mb-2">
                            <label htmlFor="user_email" className="text-xl mr-2">Email:</label>
                            <input type="email" name="user_email" 
                            className={`bg-[#1b1b1b] border-b-2 flex-1 text-xl w-0 ${emailError?'border-red-500':'border-white'}`}
                            value={values.user_email}
                             onChange={handleChange} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="message" className="text-xl">Message:</label>
                            <textarea name="message" 
                            className={`bg-black border-2 w-full h-80 rounded text-xl ${messageError?'border-red-500':'border-white'}`}
                            value={values.message}
                            onChange={handleChange}></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="px-4 py-2 bg-gray-700 rounded text-xl">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full lg:w-[45%] xl:w-1/2 min-h-[790px] absolute top-0 left-0 h-full lg:h-auto lg:relative -z-10">
            {isLoaded && 
                    <GoogleMap mapContainerClassName="w-full h-full" 
                        zoom={10} 
                        center={{lat:googleLat, lng:-118.24}} 
                        options={{ mapId: "90ed091bc16bc747",disableDefaultUI: true, }}>
                        <MarkerF icon={'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'} position={{lat:34.05, lng:-118.24}}></MarkerF>    
                    </GoogleMap>
                }
            </div>
        </section>
    );
};



export default Contact;