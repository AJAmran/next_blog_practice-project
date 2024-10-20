import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <p className="text-xl text-center mt-10">
            Logged in user email: {session?.user?.email}
          </p>
          <Image
            src={session?.user?.image}
            alt="User image"
            height={100}
            width={100}
            className="rounded-full mx-auto my-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
