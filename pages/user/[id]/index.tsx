import { UserDto } from "@/api/dto/user/user.dto";
import { userSerivce } from "@/api/user/user";
import { regionDefault } from "@/const/dummy";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function User(
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
    
}

export const getServerSideProps: GetServerSideProps = async (context)=> {
    const {id} = context.query;

    let data: UserDto = {
        id: "",
        name: "",
        imageUrl: null,
        subscriberCount: 0,
        columnistCount: 0,
        region: regionDefault
    }

    if(typeof id === "string") {
        data = await userSerivce.findUnique(id);
    }
    return {
        props: {
            data,
        }
    }
}