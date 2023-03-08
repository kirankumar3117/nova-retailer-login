<template >
    <div class="signUpViewContainer">
        <OtpError v-if="otpError || success" :data="successOrErrorData" @otp-error-submitted="handleOtpErrorSubmit"/>
        <div class="container" :id="otpError || success ? 'disable' : '' ">
            <ProgressBar :phone="signUpPhone" :otp='true' :id="userId"/>
             <SignUpOtp @otp-submited="handleOtpSubmit" :otpInputEmpty="otpInputEmpty"/>
        </div>
    </div>
</template>
<script>
import OtpError from '../components/OtpError.vue';
import ProgressBar from '../components/ProgressBar.vue';
import SignUpOtp from '../components/SignUpOtp.vue';
import router from '../router';
export default {
    components: {  ProgressBar, SignUpOtp, OtpError },
    props:{
      phone:String,
      str:String,
      otpErrorStatus:Boolean
    },
    methods:{
       
        handleOtpSubmit(str){

            if(str=='123456'){
                this.userData.otp=str;
                console.log(str)
                console.log("OTP verification success full")
                this.userId=true; //(progressbar) he can move to upload documents after success
                this.success=true;
                this.successOrErrorData.success=true;
                this.successOrErrorData.errorPropsMobile=false;
                this.successOrErrorData.errorPropsOtp=false;
            }
            else{

            //checking error start 
            setTimeout(()=>{
                this.otpError=true;
                this.successOrErrorData.errorPropsMobile=false;
                this.successOrErrorData.errorPropsOtp=true;
                this.successOrErrorData.success=false;
            },1000)
            //checking error end

            }
   
        },
        handleOtpErrorSubmit(otpErrorStatus){
            if(otpErrorStatus==true){
                this.otpPhone=false;
                this.success=false;
                console.log("success")
                router.push({path:'/signup/document'})
            }
            else{

                console.log("otp error becomes false");
                this.otpError=otpErrorStatus;
                this.success=false;
                this.otpInputEmpty=true;
                setTimeout(()=>{
                    this.otpInputEmpty=false;
                },1000)
            }
            
            
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