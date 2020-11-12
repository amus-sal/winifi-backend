import Joi from 'joi'

const brandSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    email: Joi.string()
        .email({ minDomainSegments: 2 }),
});

export  function ValidateBrand(brand: any){
    return brandSchema.validate(brand)
}

const packageScema = Joi.object({
  emailCount: Joi.number(),
  smsCount: Joi.number(),
  notificationCount: Joi.number(),
  name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
  expireTime: Joi.number(),
  currency: Joi.string(),
  price: Joi.number()
        .min(1)

});

export  function ValidatePackage(p: any){
  return packageScema.validate(p)
}
