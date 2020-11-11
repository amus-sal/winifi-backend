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
  email: Joi.string()
  .email({ minDomainSegments: 2 }),
  sms: Joi.string()
        .min(3)
        .max(30),
  notification: Joi.string()
        .min(3)
        .max(30),
  name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
  expireTime: Joi.number(),
  currency: Joi.string(),
  createdAt: Joi.boolean(),
  updatedAt: Joi.boolean(),
  price: Joi.number()
        .min(1)

});

export  function ValidatePackage(p: any){
  return packageScema.validate(p)
}
