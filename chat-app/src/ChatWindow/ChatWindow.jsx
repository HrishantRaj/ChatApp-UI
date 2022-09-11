import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ChatList from '../ChatList/ChatList'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import ReceiverInfo from '../ReceiverInfo/ReceiverInfo'
import ChatBox from '../ChatBox/ChatBox'
import { useDispatch } from 'react-redux'

export default function ChatWindow() {

  const [userData, setUserData] = useState([])

  const currentUserId = "66e2463d-8e35-4564-9135-42f0c23f4bda";

  const fetchData = async () => {
    const resp = await axios.get(`http://localhost:8080/user/${currentUserId}`)
    setUserData(resp.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const chats = [
    {
      "chat_id": "a3ebec4c-cc32-4606-b8ec-c83c12d97b9b",
      "receiver_id": "c516f66e-99fc-4679-9572-5a6b494f3a51",
      "first_name": "Kiley",
      "last_name": "Risson",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADzSURBVDjLY/z//z8DJYCJgUJAsQEsMEZ5efn/f//+Mfz58weOf//+Dce/fv2C0yC8d+9eRpA+RkrDAO6Czi3vrpT7COnA+LGxsdeRbUTHZ86c0UQx4MfvvwyZi55cvXX7a8jeZvXrQEWKuDSDMAyAvdCy+cV/EW42hk/ffzOcvvP1zMNbX+JOTdW7TowX4GGQs/jFlVfvvzPdvfop+OxM/euenp5XYLb9/PkTbjPMWw8fPtRB8cK3n/8YVuUpasG99OOHCrqzkWMDwwUUx4K3t/d/fIGGnCZA+PPnz1ROB7a2tv+xBRayrR8+fGDEGQsDlpkACSYJhTJIjokAAAAASUVORK5CYII="
    },
    {
      "chat_id": "566ed8d9-ed42-4ff6-aa05-c17a0036bb85",
      "receiver_id": "08e84b8f-f1ae-4be3-892f-8f541f072ce1",
      "first_name": "Blinny",
      "last_name": "Betchley",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKoSURBVDjLpVM9TFNRFP7ubWvb1x+QQAtRIFaRmEakaYiGiJaAurioiYsxXXVxMHESB40TJI5OOihxq0sZTDBq6kANikAJNLSBAokQ29q/1x/69673PoSoMS6c5Oa8c979zv2+k3MIYwz7MYp9mvb3IBKJ9HB3T7BSFAXcW8Q3P/KvWOTHXC5XaBdDRDIajZ7jflyn03VYrVYQQnZ+cr9bTJjwyWQSxWJxg+dv9vX1fST81SEevLXZbKRWlLE++wlyfBO5+BZq5ZIK1BkkWGxtsNoPoePUaTCdHqurqxzGLpDl5eVZDu41m8148+QBVoLv/qv5aP8QBm/fR6lUEsznNF6vd2xtbU3vcDhw7IwHBTmrXqxXymC1GpdB0XnSDvfFw7C0n0XXwGUYG5pUOYlEQtJyBrnh4WFLuVwG7wEGvHeg0WjUIoVCAay+jVx4FJbWfjQVMjB1diEej6t3uIQkTafTU3a7HQaDQaUVi8WQSqWQzWZR4wwK3yZhanbD2uZCfuMDVhYDKrharQoWE9Tn8z3f1ScKCGr5fF59XU6uIL8+CUtzI+o5P2zOG6CJ99BpqcqCMxihCwsLOQEWIJE0mUzQ6/WglKC6NYmW7ivA9ldMv3wFc2MJJL2E2o95wS7l8XjyVJZlRXRTkiQIKep4Uop6JowDrAzLwSKUcgxgCur5zzjiuYvU/DhQyYyqd7mWkNPpvOX3+8O8H8hkMqCEoRD1obGjF0oxxLEluK91Q6ls8l5F0OI4D33osX5vEsnO6EmBQOCFVqu92lRbIhKR0XrcyF+d5lormHkd5kVOgGgaAOMlfHk2EmeKMkj+3sZgMNhO5x5u9Fx/Cg1d47OQ5ln2x/5pjN34vjiHyMQjH/nXOk+NuZOsrkhM4YsklmjvsD2PneWa+QnIJn6IP3aTNQAAAABJRU5ErkJggg=="
    },
    {
      "chat_id": "d97be94d-fd9e-4fa3-87ae-b903934dd543",
      "receiver_id": "e9ebd7ed-157f-46bb-86b4-573d66a24920",
      "first_name": "Cinnamon",
      "last_name": "Rosendorf",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAABjSURBVCjPY/zPgB8wMVCqgAVElP//x/AHDH+D4S8w/sWwl5GBgfE/MSZAQNL/31CdMHiGaBNS/yPbjIC3SHSD+3+EXoh5z4k2wfs/qt2/ofAziW7Q+v8brhsSrn+IMYFgZAEAE0hMH/VkcbsAAAAASUVORK5CYII="
    },
    {
      "chat_id": "ca65592d-d541-411e-9ac1-ab9edbc3abc7",
      "receiver_id": "e37028ee-e746-4dfe-8ae5-1976783bf5e1",
      "first_name": "Bobette",
      "last_name": "Boliver",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ7SURBVDjLjZNPSFRRFMZ/9/2Z90anRlKzMS1UjFyoWS3U2oVQ0KIWrXJRFC7KTdRCqUWQkBt34aKN1a5FEUkRLbKFiBAoVi4kUQIbtfwz0zjjezPv3ttCwyYr+jibs7g/vu+cc8XDwbE+pcT5TFa5fsB26fzWtsC1Gbh85vA1AEtp0X76WGWp67pCCJN/yVMggxxP30xfADYAGV85juOKR29X8VgmJaaoKvtK2E4SaMXK9zCT01EKdB0Wxdw4V4VUQvyEWtkADMPEEJA1Fqgq+YoT+kzSTxHIAMtxqK6MMTtTSFGoBKXyXVkACjAMga+/EbJXSawn8aVHNggIdBrHcUj7YYrDBhqdN5gtgBDoQOHLHF7gs57zyaoAqQCRQyuJZQi0zp+qAaD1BsCllFS6EI2NryR+IBEiRDoVIRIqxzQN0GJ7BK03IkTMvXxZWCTqzlNQaOCIgLWVAhYXYsSi1ViG2LYZS/8KsHdTHm5ibnyIokgcISW2V8q+mnYibgyp1O9nseVgarkDqRRSKQ7432ip3I8CZuYXebXWjZkoxFQRbj/wyHjezhfd87de3p3osbTWCODkxmEBYNYnyKSXceffU9LaQcP0GEuZKY7UHaViVy1Dk8/E6Mf4nebO8qLNVPnGZLgIv6SGZP1ZtGnzbvIthw42Ig1JY6wNKXI017cCXLVcWyRRuWhjWTMIsYnSPwuApeQitohwqu4SANdP3GfwQz/w3LVClnj8ZGimJSt1vdZ//gOJVCI6GR9hIj5MV9sAva8v4poOgCf03179oubO8p6KqujN1obj1O5p4tPCOCPvh5mbTfb9F2AT0gtcAXYAKaB/9F686wcCdBKN9UyNSAAAAABJRU5ErkJggg=="
    },
    {
      "chat_id": "22b40693-f505-4691-9b16-c08e8182c8fe",
      "receiver_id": "39204c24-539b-43db-93c4-7d4da2a62dd8",
      "first_name": "Eachelle",
      "last_name": "Hampshaw",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIuSURBVBgZpcHNi01hAMfx73PmzHWUO0QmbiOhyQyZMYWGRhbYSfkLpKwYpSRTSikLxE7IxsrGSmJBGtSQnXfJ5CUvg+G699x5u/ec53l+zilFNtR8PkYS0xEwTQHTFJJ5dX3to6hlxQpjAn4TjbHXH5ytrgca/MmQm1i+7akNyRgFHYv6LjYbY0BkBMZg69+Xfn109INA/NJUaJFcOjr+efAgcDkkZ1XHJzMaX87hkiYIWjCmSFTaTGndiQIS4EEeECaYtWD4at8R4HJILjWBfIJLCsgLP/WedOIr46N3aI4WglLwCZIFLMWOQwXkF5MJyRlF3k6RTIKSCdKxGsWOnUTzOgEDCPAgAcKEc8AFIZmQXBoQzmxlTuduwIOE8PjkE7Z6C7kY2RjZGnLjRG2HoSFyIblUkqvjJ58gFyM3hmwVn1aQi8FWGRyucPedI56aIrX76Qlc2A6E5BpI3uLTb8jGyMXIVpGNkatw42WFp/UimzauoW1uO7efX+Hes5HwUn/pVEAukQwO2R/IllH6HdkysmVkK1x7UWV1RzcucHQv3IozKb2rNpDZG5BR4it2shyn4wVvJ4vYxnxc0oZ3y/BuJaO1Ms1mFts795E7sPkCy1q7yEQhGdUbJ9+c37EOsQVDkb/UapXo+ch9Ho8MMbD1Isdv7iJqmkGmbiTxL739pWNtS2Yf3tDVR/uCHoa/POT+kyE+vo1PG0n8j97+0nFgD1AExoCzD86MDPwE/3Mt+7fw600AAAAASUVORK5CYII="
    },
    {
      "chat_id": "205ab537-9ff7-4a7b-8c31-852d6301b0d3",
      "receiver_id": "481354fd-cfe1-458f-96d5-e45f52c807a5",
      "first_name": "Diahann",
      "last_name": "Burry",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJKSURBVBgZpcFdaI1xHMDx73POs7NzbMO25qXFGikRkmQXLuQlL3GpuHDhwkuSC1dKaQp37pTszhWFFJFGLG1cuDG1cyHKsnm3tXP2nGf/5//7/36myI2i9vlEZsZM5JihHDMUn7351fgLUcV7xYngPaRipE5wXkgzI/FKmgox0zYsK/GHIWqEYIgaEgwvhlfFe8OL4oOSidLz+DMxv1RqQlAQNSQoWTC8KF6MTBQngcwbTpTMKy2NMemkEDNtx5pGegerbFnVyEQtcP3ZOHu7mikVIoxpBoPDNfrKExzcNB8nytW+L2jqyTkRak5pbsyjCvV1OdIsUCpEXLz7kQjovvGejrYCK9pLtLcW6JxXJPWKJkIuccLzNwnrl87i9otxinURh7e2EecjJl3AgMQFVGHj8tn8VJ0KOB+wJJCbTI3NK5p4MlRh2+rZ1Jxy/tYozhvJVMAMkqlA5eEVysdXM7CzyNCRZSwt96AuI55IM3wwnpYrrFvSgBlMOsHMSFwAg5XD17CRR3TtP0R950rSV700DTxk0GpEW86Vbc/aZkbGHJlXnCjOG5koTpRMlAP9u9h99ASlt30w2g9z5vIt7uDBg9fElaqQZoGmYp6sLqLoI3y9IRLhJYdXoyX5QHFBJ+w6yW9x90IW8J14LPVcuj+KeUOdYplgXjEXIFMsKFsLLdRe3qPhzjFc+okaUK3k+Ra1EpkZ/9K/r7270NRwelGrxHFuhOpX4d3nfPBTdiYyM/7HwL7Fp5KxD0fyIeoIeRs1uLy9Vy78AKt+cH41HYv2AAAAAElFTkSuQmCC"
    },
    {
      "chat_id": "fe377cf6-30f5-4437-b55a-02b9bb728e45",
      "receiver_id": "50d00841-0bc3-419e-9fe5-2c87be8e4b58",
      "first_name": "Claudette",
      "last_name": "Lindblom",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVDjLpZNBS9RhEMZ/u60aZAdNSXdLrcxNS82DaRQVRBCUGngwwkOnvkB0yEt0qy/QKSrq5DUSQgLTSi01d80gcrXSTTdTViTU//+ded8ORihFYD4wl+FhYOY3T8A5x2YU3Ij54qOmp833zmX+14CWh431vm9OGs+8W9sPXOm49HsHqxarFhXbZ9W2EQxeECNnxUh0W2Y2kdwIcwtzJCbHY8+uvagBCAG0Vl3G4XDOYZ1jbPbj0ffJ0S6xQrT4AFszsxC1qFPycvJYXl45fOxG7ctXNweOB51zWBzW2V+l7MnbS21JLemFNBmhDIwIxhqMGowKxgjGNxkAISuWB2/uoqIE7Rb255dxMHKInO07CLkMxpMTpOZnmE7NEN4ZQUVITIyPDNyK1wEE1mJsud+QLUavl4cr2o5E64glhumJ9ag629TV1ttRd7VGNWQ/Dd6Ol/6VgguCDTjiYzGWvCWiReX4Pwxe2gPAX/Lx5rx1dAKt7c1OjCBGcOIoyC1kMb1IWTjKvqJSJqbGGR6Nk0gkOBitQMQyNDg0kmj/XA0QMr7hRPkp1ClqBbHKXNY88Q9xineVEC6IUFgQwZ62qFUsFm/Fq9p9Pvx66sl0XdD46y8sKiwuLZL6/o3nvd3Mp+cRJ4gVxCliFRFFjBqAQMOdM06MYHxB/FVEYqRPPG3z0/7qI/kazc/Pp7K6kuSXJEP9b2MznbM1f1D4l4oaI/Uq2qViJ1Ods9ENZ2Hy8dd+NdqtRivXUdhsnH8Cn6RstCM01H4AAAAASUVORK5CYII="
    },
    {
      "chat_id": "a7367bdf-a7b8-4aae-83e1-529c9271b199",
      "receiver_id": "47fd3c8c-319c-4523-bb69-25b980f13238",
      "first_name": "Farrel",
      "last_name": "Blakeney",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAInSURBVDjLhZPda9NQHIbzVwlWryzthpWuIpWOieKYZXO2q1vC0KFr9aZM3Yr40QunspU2TVYmYhVRvNErwQtR3E0JTq3G2o80mc0Ql9dzTr/SYdnFA8k5yft78nLCjcxJNwKzsuoOiZoj2GKsi3NS1I7y4hIA7n9wgQvyz4KiWLphwNgyoRMq+jZ+MUyo1ToOR6Ra3wA6ua4b8F/2gL830WF8YRGB2VX4hBwOBEWrnxl3kGzQyXzyLJbfLuL+uwQevr+Jk7EsiBn2MmMBdbJ58UEEKx9vYfVDE89MBtTsTVjA53iiy/XbeD4XRaluwhWSNRZQIYmeay6cSsYxfCmFwfMpEGW4wjk4gxm4J7IECd6IhOW7z/AlkYRaawXQbyuTtCOJAQzPp/bU9gtrLOBHrUECJI3bP5bWypoJx7l9cE+tMO0TsTuIpl90uCq+xJnoEtP2hUV8Cp7G90orwMECGthQd5gynRxLPUWuoOOR8huPN//gyde/iMuvmLZvKgtlfBTFdsBgSNwslavQiOIACaCF0ofzRQv5bzsd6BrV9obSyI8EUCw34JwkAcd4aWFoWn5N00ihFi30+HwaM5LCmM4UGH5SLtX28uvMtlg2mwH2U9UuNHBlDUKu2ANdo9pDwjqqpNQSOwdyrSegXeih0Rh7wQ5da2lbdDI5RBqxT/Qa2ArdUK1ddLV7/gX7jb1QzdhGjVAl10262n0D7IXSSbtpa9vf+QeB6/JTIb6VuwAAAABJRU5ErkJggg=="
    },
    {
      "chat_id": "ddddd117-d8a9-4e33-942b-d5655273a066",
      "receiver_id": "8f0f3aaa-5dbf-4425-a1cf-5309825c04f6",
      "first_name": "Anneliese",
      "last_name": "Renachowski",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANKSURBVDjLXZN7TFNnGMaPg2aJWUyMMfMf/9A/hkbjksVtRmMy75ekJCZL1DldzNwmc8TgEHSitEYFEaeiNsK4OHB1FihyE0Gw9VALFbGUBkYpFKSIrW3p5XCwHNo+e8+Ja8y+5Hfy5vne5/nO9+YcBgAz1ch8QCgIC/GM+FDU34e0j9/tm4ik/3TGr2VkRN5U175xwatDsOtbt6lObkhvFfSE7x36zrpdbMic4p3uz/JRv4lYLAW47zKngqb9r2ZcjfB0HPQ/16zlcg1e3Ohyo6TntYRY/8460KP5jA9YlTzX8+sb8nUTMsZ5mzkdsmT5XO0H/cY7a2cLOsZwzzIBNTsKlbYPBZV9uN3mgNo8jtInOvxTty067ayMuO4vt5E3iRkuZNYPFM21PS1exefpHLhrGoNWN4IhZxDeIAdPcAq2sSAqWoZQ2j6Ce7X5sKjXhPuL5r0gb5I0iPSS+kuZ1VYUGUagodPENRkIYPDVa7ylWoSLAbcahqDS23FGw+LnMuN5aQbiY19ht/54lRW3mmzop5P52Rg4nsfN0jK4KSgUDqO6+THYwQByNL0Qe0VPPODrq6wvTf0CF/+ywD0tYDIcxQxtnFQocUdbi8xsJVqMJlgDAo6pTBB7RU88IDmnyfdjsQmKMjPGOIFConAGQjiXf1kys+ZeeGaB514BqVc7IPaKnnjA9jNV+j1XdFBWdOOJPYAJurQzJOCB/ikcviBcEaC38iYe71+G1o0yaOWLcP67XY54wIbjfyp2Ku7j6B9G5Gps8NDAJgUgFCWotteo0JuxHm8bLyPW/xD838fw7MiqWMumxFQpYF2qajXRt/V0PdIKWVzUDMA84gdH8+B4Aa17l2KazCiQA5nzgQtL4Mn7Cs2bExzxb/2LH/J/Ssmt4DefqMGB/EdIu84i/ZoBaVfapdeOdWvx/vJnLyI9MRYPMBqNG6xWK9p0bGTdkWJ8/osaXx7VSlTuWIipku8BMoUzGEwSLw8noHlLwrhkbmhoWEhwdrsddfX1vk+/yVKu3HNKT/hEzu7eNNp56JPoROYSvDkpw/ChOWiTJ0Yebkn4TQooLy//iBggZogV//+VRQy7F59o3ipzitdpSl4QeZC8IEfU/wVxe9rJJAH4hQAAAABJRU5ErkJggg=="
    },
    {
      "chat_id": "45daef0a-c3cb-4deb-8dd6-a4b9260a5dea",
      "receiver_id": "ed0c816c-3aa0-4128-9356-87b80230cde1",
      "first_name": "Leanna",
      "last_name": "Tartt",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIESURBVDjLjZNPTxNBGIexid9CEr8DBr8CHEiMVoomJiQkxBIM3dgIiaIESJTGGpVtyXIzHhoM4SIe9KAnEi4clQtJEczWFrbdP93d7s7u/JwZ7XYJBdnkyRxmfs/MvO9OD4AeDvuuMPoY/f/hKiMR5WKCvlarpRNCwiAI0A02D1mW38QlcUE/DzebTdi2HWEYBhqNBqrVqpBUKhUUCoVI0g5f4gK+wHVdeJ4nRo5lWdB1HbVaTQgcxwHfRFGUvxIuCKYfzmqZyZ2wKIO8fQ3/1Uv4Sy/QWliAO/sU9qMZmFMS3HfvT1xJ1ITOZJ9RpQi6+RH0y2fQb19BP23CVhRo+TysXA71+XkcMIk6fAfHK6tQVfWEoESXngNra0C5DHZJYGMDZiaD35IEi41qOo3vc3MoJ1Ooj92HpmkdQZiVEsHUAzl88hjY3gYIAdbXYQ0MoDo4CH1kBHssvH8jCf3eGKzDXzBNsyNoF/HH7WSJZLPA7i6wtQVnaAhmKoXjxUX8vDkMY3Qcnm6IInJOCS4nEte9QhF+RhInIRMTcFhYvZWCcXcUPmsl7w6H/w+nBFEb5SLc8TTo8jLq7M4m25mHfd8X8PC5AtHrXB5NdmwRrnfCcc4VCEnpA8jREasp6cpZAnrWO+hCGAn+Sa6xAtl84iJhttYSrzcm6OWSCzznNvzp9/4BgwKvG3Zq1eoAAAAASUVORK5CYII="
    },
    {
      "chat_id": "7b8e6114-8356-4ca1-bc52-7a94ada93a14",
      "receiver_id": "0ba97645-3714-457e-a446-3aa72e85e592",
      "first_name": "Ede",
      "last_name": "Gun",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJsSURBVBgZfcFLbExhGIDh9z9zztw6marQUm1DNZEQEdUpsRC2lLgsJDZNGmFjY2nBErGzENewIEUQRBBBJFW3IC6xqqYSd4tWtOPMnMv/fdqYUIvxPEZVqWbn6sUzm+tyV3OpTMFaQUET2eSN7YdvdFHhUMWudR1OY23NxVwyXbAiWFUiK8YfLa3ZvXFpDxUOVbTUanZKpmZ5Jl9L67w5NDY1IKKICHWZzAkqXKpI6seoftZsae/a7Ez3ikwoaZox63H/7LGACocq9n3fE06dlh3L4hOaFMbLMiH48FTntjWGVLgD1wt+Oj8/Y4zDX8r5rZ/ibYcWvjxV09/R3NJKyXh4JuTDx2HtHVrU28lvZuBap7ateYQxBpRxih9Ydhx4QuvceRQKAU9vncWYNF4yT1NHN6eP3olvv3q/JX7cc8EMXC5I29o+E349jA0T4OTZ2xtRmrqaKZ2zGCyCtfzhKkxDeXHuXvDm7etNLpFBJcSGSVSUn0MP6M6/gvg4PKSq45uupA4+33PJxaiRuMTo0CDRyCckKlO3YD0/2nfxL2VCzoPRk8v4kpxJ86IVSZfIwc3UM2PVfkBAFRuHJL7f5KtfxqqlZBP4McQ2orlhCQaIn70ojXj9sUukqC0TfjsJKL8JKbFkyTEmSYwYPBWsRLgEWCDR0d40Z2XfiEsAKjEYQBUQkAhHIxrcH9QbHzVF1CmiDJPOtPMOOLOSEca5hIrBgiqoBQ1RCUDKqJZQ66O2iMajqPUBYTJXQyH2h5HYA3VAE6h6IClUakAjVEMwITgxtlxmMlfLweehIxsaUBwMhv9RwNwF0WEqfgE9XTQvEQ+I/gAAAABJRU5ErkJggg=="
    },
    {
      "chat_id": "51722f24-8a43-4ff4-aca3-f2046a2bdf86",
      "receiver_id": "07e9d198-993b-4766-b141-a3943772deb0",
      "first_name": "Meghan",
      "last_name": "Gleadle",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLpZPNS9RRFIaf+5tx/JqxUZGKQtEkyJBKw1ZhG0mSFkW1aVW7Wgpusv4CoX20KIgIKowgZSgwrIVghFQbM2swQRM/xmx05jf33nNaBJNWtKizPJzzcDjv+xpV5X8q+mvDPTdxVXpV6BahQxVUGBchpcL1xEnNbp43my9wz02nCrdMfV+jSXagsRpQj+aW8JkJwg8DaREuVJ/S0d8AbsSc0mTnYLDjPFqxDb8xiYTLqMuDKSMoa8bYgPDzA8KF0dN15/RREWBHTI0qM5HWe3EJ1vD5NNhviAtRn/8BEcWU1hMpbeXr2MWsCA07z+tKAKBCb9DQH9cYSJgGt87I4yWQAvgCL56B2Cxu7R0+/EjFvv64eHoBAgARekz1ESSfRl0OFcuxE+WoWNRbjnZmUQlRm8Wtviaa3It4eooqiNBCaRWSW2X6bTWYBJhf5FFF3Qq7a54CId7TWASokFOXj+EdNQ3tVNTuwQSRrfviWV94g64NgSoiRH5e4EljcwchRmU8R2J7M0G0ZAvA2xC/PIwJKhAfxYZMb/7BkF2awMTqCcJR7MYcsNmhil37CMv3iVYdILc0gy0wVJQxM2jqRPgUP3InLvY9bn2GSLKHkmQbqCdcfElh9iaR8l2YquPMPLmUdZamQ1d0sWikxfvmTLSu60FZ/WmIfMNlXuFzc6jLY6IJIomDeJrITA6TmUqdbevXh79Zef6u6RLPjcqWvsZY7X6CkgDE4ULP+vwUX8YG0s5yuf2qpv6YBYDZ2yYunj4Rur2nwxXAWcadJeUsA4ev/SVM/1LfAVOtXW4xpbWpAAAAAElFTkSuQmCC"
    },
    {
      "chat_id": "1da2b5fb-ac2b-41b6-8615-227e60df70e0",
      "receiver_id": "27c42002-495d-41ad-96b6-33504c5048a7",
      "first_name": "Cassie",
      "last_name": "Challice",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKUSURBVBgZBcHda5V1AADg5/29Z/NMNzvW5qbhwmLpQkpbkqBFXvVBF0pXUXdddVMHu5Agsv6D8KbwppC6LRAqQWhdRKTmoAwvnJSOOsqmTmU7H+/H79fzZIN3tIanndDQBhAQABAAABU6PiuWfNoYnnbCzOG2yTnyIUKDLCNkZIGQETLkZMiQajoX28M/nNHQ0DY5xyBnaj85lq9we4EQyAMCObJASoyOs/VZtp5pN0A+RGiy7yjgKOU6i+e49j31GjJSQsbqLZqPEAkisgbdm1z+jr9/YX2FoU08dYRXT7L9ACCjLOmXVAUFDQEho3uTv74mZDQC43vZ+zYPTfP8+yyc4to5BhXFgLKmT0NAwNR+Xmxzb4nOAkvz/HScuXetjzTdjx2Tk3vki+cZVJQVBUGEnAxDm5iY5Zm3eOUkrZ3iwhfuXvlKs7XH6vgO0gb6JWVNnyAgw90/+PE9Lp1ifYWhjRz6yL2RUSOTB23ets/q9Xm9XYfoV5SRgiAgBFKgt8zSPPMfcuNnRf+uO1XP2HhL/eCM8dk3Ldf3pH5FUVMQRMjIEwc+4NDHbHuOhS+tXD7t4Zkj9BdcOP2N0VbP6vXf3J/YSlVTEEBITOxh+34mZtlx0NraqrLfNbalKw7+IUX12kU7Xzrm3w19dVlTEICM3gplF6TlRZ2ypzW9V+z+KcWeuTd2iUVHs3nV5tnXdbodKoICqULN2WOcPe72r59rzrxm49htqbpDlrv07VVEsX/VxJOP+e9BR3d0g/yTGS1TIwdsmWF4lJAsLt8wffi40MhlQzuE5m6P7ntBaO6WDT+hsWlGPva4653zi9ngZa3hKSdMaYuouDD5tDqSYpLqKMUoxSTFJMUoxSSlWKWUfv8fIbEaFyrl/WgAAAAASUVORK5CYII="
    },
    {
      "chat_id": "e4b20ae8-9ab2-49cd-886f-603dddc4bbdb",
      "receiver_id": "47b8b73f-5eaf-4d74-ad70-b931eb69a76b",
      "first_name": "Wrennie",
      "last_name": "Westrip",
      "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAETSURBVBgZfcExS0JRGIDh996OFIQEgSRhTS1Bg0trw937B9UPCAT3hnJ1kYbGhrv0BxoaXSsMhBCsyUEcoiTKUM/3HU8Fce4Q+DyRZz5DcOkdiqIIiiAo7xiCMXs4HI4ZisPhOMcQOJQbOoxxKHm22UUxBBbHM1cRfw58GUtMIAieTIwgxAQWRclMEZSYwCIIGYsixASCYsl4pgiGwDFF+HWUaDopbfCGHRp+nCWSTktFXvFDOKyuNNYp4LhFriPPaXW5UWAV5Y6HNH+/dbHJIjN6NHlJzMnxWqNIDqFHh8/U7hiEJbp0+ar0m2a4MGFEjie6jCrtJs1y57FuI21R6w8g8uwnH/VJJK1ZrT3gn8gz3zcVUYEwGmDcvQAAAABJRU5ErkJggg=="
    }
  ]


  return (
    <div className="container-fluid">
      <div className="row" style={{ height: '100vh' }}>
        <div className="col-md-3 col-sm-4" style={{ paddingLeft: '5px', paddingRight: '0px' }}>
          <ProfileInfo senderDetails={userData} />
          <ChatList chatListDetails={chats} />
        </div>
        <div className="col-md-6 col-sm-8" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
          <ChatBox />
        </div>
        <div className="col-md-3 col-md-0" style={{ paddingLeft: '0px', paddingRight: '5px' }}>
          <ReceiverInfo />
        </div>
      </div>
    </div>
  )
}
