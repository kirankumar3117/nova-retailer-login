<template >
    <div class="signUpViewContainer">
        <OtpError v-if="otpError" :data="successOrErrorData" @otp-error-submitted="handleOtpErrorSubmit"/>
        <div class="container" :id="otpError ? 'disable' : '' ">
            <ProgressBar :phone="signUpPhone" :otp="otpPhone" :id="userId"/>
            <SignUpPhone @submited-mobile="handlePhoneSubmit" v-if="signUpPhone" :otpInputEmpty="otpInputEmpty"/>
            
        </div>
    </div>
</template>
<script>
import OtpError from '../components/OtpError.vue';
import ProgressBar from '../components/ProgressBar.vue';
import SignUpPhone from '../components/SignUpPhone.vue';
import router from '../router';
export default {
    components: { SignUpPhone, ProgressBar,  OtpError},
    props:{
      phone:String,
      str:String,
      otpErrorStatus:Boolean
    },
    methods:{
        handlePhoneSubmit(phone){
        
            if(phone=='123456'){
                this.userData.mobileNo=phone,
                 // this is for if the mobile no is correct
                 this.signUpPhone=false; //progress bar show current page
                this.otpPhone=true; //progress bar shoes successfully moved to next component
                console.log(phone)
                console.log("Mobile Number Registered Successfully !")
                router.push({path:'/signup/mobile/otp'})
            }
            else{

                 //checking error start 
                setTimeout(()=>{
                    this.otpError=true;
                    this.successOrErrorData.errorPropsMobile=true;
                    this.successOrErrorData.errorPropsOtp=false;
                    this.successOrErrorData.success=false;
                },1000)
                //checking error end
            }
 
        },
        handleOtpErrorSubmit(otpErrorStatus){
           
                console.log("otp error becomes false");
                this.otpError=otpErrorStatus;
                this.otpInputEmpty=true;
                setTimeout(()=>{
                    this.otpInputEmpty=false;
                },1000)
            }
            
            
        },
    
    
    data(){
        return {
            // states for progress bar start
            signUpPhone:true,
            otpPhone:false,
            userId:false,
            // states for progress bar end


            otpError:false,
            success:false,

            otpInputEmpty:false,
            successOrErrorData:{

                errorPropsMobile:false,
                errorPropsOtp:false,
                success:false
            },
            userData:new Object
        }
    }

}
</script>
<style>
    .container{
        width:100vw;
        background-color: #eff6fe !important;
       
    }
    @media screen and (max-width:420px) {
        .container{
            width:100%;
        }
    }
    *{
        background-color: #eff6fe;

    }
    #disable{
    pointer-events: none;
    opacity: 0.4;
    }
</style>