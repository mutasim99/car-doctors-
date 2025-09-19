import logInUser from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collectionName, dbConnect } from "./dbConnect";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);
                // Add logic here to look up the user from the credentials supplied
                const user = await logInUser(credentials);
                console.log(user);

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log(account, user);
            const { providerAccountId, provider } = account;
            const { name, email: user_email, image } = user;
            const payload = { providerAccountId, provider, name, email: user_email, image }
            const userCollection = await dbConnect(collectionName.userCollection);
            const isExistingUser = await userCollection.findOne({ providerAccountId })
            if (!isExistingUser) {
                const result = await userCollection.insertOne(payload)
            }
            return true
        },
    }
}