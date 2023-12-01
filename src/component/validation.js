    const validationphonenumber = (phoneNumber)=>{
        let pattern = /^[0-9]{10}$/;
        return pattern.test(phoneNumber)
       }
    const validateBitsId = (bitsId) => {
        const pattern = /^([0-9]{4}[A|B]{1}[1-8 AB]{1}[PT]{1}[S]{1}[0-9]{4}['p'|'P'])$/;
        if(pattern.test(bitsId)){
            return 1;
        }
        else{
            return 0;
        }
    }
    const validateemail = (email)=>{
        const mail = /^f[0-9]{8}@pilani\.bits-pilani\.ac\.in$/;
        return mail.test(email);
    }
export {validationphonenumber, validateBitsId, validateemail };
