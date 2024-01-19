import * as yup from "yup"

export const schema = yup
.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(20).required()
  })
  .required()


  export const KEYS = {
    SERVICEKEY: "service_tzvslyp",
    TEMPLATEKEY: "template_a2q7kts",
    PUBLICKKEY: "VkrBgXkhbz9stdbea",
  }