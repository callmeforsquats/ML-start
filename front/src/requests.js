const url="http://127.0.0.1:5555/torch/router/clf"
async function sendPicture(picture){
    let formData = new FormData()
    formData.append('file',picture)
    let res = await fetch(url,{
        method:"POST",
        body:formData,
        mode:'cors',
    })
    let ans = await res.json()
    return ans
}
export {sendPicture}