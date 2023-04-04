import { db } from "../firebaseConfig";
import { Reclaim } from "@reclaimprotocol/reclaim-sdk/dist";

const reclaim = new Reclaim(callbackUrl)
const callbackUrl = "https://stickandstack.web.app/" + '/callback/'

export const reclaimService = {
    makeClaim,
};

async function makeClaim(email, repoName){
    const connection = reclaim.connect(
        'Github-contributor',
        [
            {
                provider: 'github-contributor',
                params: {
                    repo: repoName
                }
            }
        ]
    )

    const callbackId = repoName.split("/")[1] + "@" + email;
    const template = (await connection).generateTemplate(callbackId)
    const uri = template.url
    console.log(uri, callbackId)
    const templateId = template.id
    addRepo(repoName)
    return { uri, callbackId }

    // return await db.collection("pages").doc("exportServiceData").update({ currencies: currencies })

}

async function verifyClaim(id){
    const data = id.split(/[@](.*)/)
    console.log(data)
    const docRef = updateDoc(doc(db, "users", data[1], "repo", data[0]), {
        status: "verified"
    })

    return "okay"
}