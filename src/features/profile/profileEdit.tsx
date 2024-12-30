import { useForm } from "react-hook-form";
import { PiUser } from "react-icons/pi";
import Button from "@/shared/Buttons/Button";
import ControlledOutlineInput from "@/shared/Input/controlledOutlineInput";

const ProfileEdit = () => {
  const user = {
    image: "/timi-3.png",
    name: "Katte Perry",
    last_name: "Katte Perry",
    occupation: "Artist",
    location: "Nigeria",
    email: "KattePerry@gmail.com",
    phone: "+2347089898987",
    stage_name: "Katy",
    bio: "",
    payment_info: "",
  };
  const { control } = useForm({
    defaultValues: {
      first_name: user.name,
      last_name: user.name,
      username: user.stage_name,
      gender: "Male",
    },
  });
  return (
    <div className="pt-4 text-text-main dark:text-white/70">
      <div className="flex text-text-main dark:text-white/70 flex-col w-full gap-[0.625rem]">
        <h2 className="text-[2rem] font-bold leading-[2.40rem]">My Profile</h2>
        <p className="font-light leading-[1.20rem]">Edit Your Profile</p>
      </div>
      <div className="flex flex-col mt-[21px] rounded-[1rem] dark:bg-neutral-black  bg-white gap-[2.25rem] p-6 lg:p-[2.125rem]  ">
        <div className="lg:p-[1.5rem] border-b border-[#EBEBEB] rounded-[1.5rem] flex  flex-col gap-[32px]">
          <div className="flex max-w-[414px] items-center justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl leading-[1.5rem] font-bold">Avatar</h2>
              <p className="text-sm leading-[0.9rem]">Edit your Profile picture</p>
              <Button className="!max-w-max gap-2 flex" themeColor="main" variant="contained">
                <p className="text-[10.96px] leading-[0.825rem]">Edit</p>
                <svg
                  width="12.33"
                  height="12.33"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
                    fill="white"
                  />
                  <path
                    d="M8.49935 17.6886C7.88935 17.6886 7.32935 17.4686 6.91935 17.0686C6.42935 16.5786 6.21935 15.8686 6.32935 15.1186L6.75935 12.1086C6.83935 11.5286 7.21935 10.7786 7.62935 10.3686L15.5093 2.48859C17.4993 0.498594 19.5193 0.498594 21.5093 2.48859C22.5993 3.57859 23.0893 4.68859 22.9893 5.79859C22.8993 6.69859 22.4193 7.57859 21.5093 8.47859L13.6293 16.3586C13.2193 16.7686 12.4693 17.1486 11.8893 17.2286L8.87935 17.6586C8.74935 17.6886 8.61935 17.6886 8.49935 17.6886ZM16.5693 3.54859L8.68935 11.4286C8.49935 11.6186 8.27935 12.0586 8.23935 12.3186L7.80935 15.3286C7.76935 15.6186 7.82935 15.8586 7.97935 16.0086C8.12935 16.1586 8.36935 16.2186 8.65935 16.1786L11.6693 15.7486C11.9293 15.7086 12.3793 15.4886 12.5593 15.2986L20.4393 7.41859C21.0893 6.76859 21.4293 6.18859 21.4793 5.64859C21.5393 4.99859 21.1993 4.30859 20.4393 3.53859C18.8393 1.93859 17.7393 2.38859 16.5693 3.54859Z"
                    fill="white"
                  />
                  <path
                    d="M19.8496 9.83027C19.7796 9.83027 19.7096 9.82027 19.6496 9.80027C17.0196 9.06027 14.9296 6.97027 14.1896 4.34027C14.0796 3.94027 14.3096 3.53027 14.7096 3.41027C15.1096 3.30027 15.5196 3.53027 15.6296 3.93027C16.2296 6.06027 17.9196 7.75027 20.0496 8.35027C20.4496 8.46027 20.6796 8.88027 20.5696 9.28027C20.4796 9.62027 20.1796 9.83027 19.8496 9.83027Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
            <img
              src={user.image}
              alt="User Profile"
              className="w-[100px] object-cover rounded-full h-[100px]"
            />
          </div>
        </div>
        <div className="lg:p-[1.5rem] w-full border-b border-[#EBEBEB] rounded-[1.5rem] flex  flex-col gap-[32px]">
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl leading-[1.5rem] font-bold">Personal Information</h2>
              <p className="text-sm  leading-[0.9rem]">Edit your Personal Information</p>
              <Button className="!max-w-max gap-2 flex" themeColor="main" variant="contained">
                <p className="text-[10.96px] leading-[0.825rem]">Edit</p>
                <svg
                  width="12.33"
                  height="12.33"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z"
                    fill="white"
                  />
                  <path
                    d="M8.49935 17.6886C7.88935 17.6886 7.32935 17.4686 6.91935 17.0686C6.42935 16.5786 6.21935 15.8686 6.32935 15.1186L6.75935 12.1086C6.83935 11.5286 7.21935 10.7786 7.62935 10.3686L15.5093 2.48859C17.4993 0.498594 19.5193 0.498594 21.5093 2.48859C22.5993 3.57859 23.0893 4.68859 22.9893 5.79859C22.8993 6.69859 22.4193 7.57859 21.5093 8.47859L13.6293 16.3586C13.2193 16.7686 12.4693 17.1486 11.8893 17.2286L8.87935 17.6586C8.74935 17.6886 8.61935 17.6886 8.49935 17.6886ZM16.5693 3.54859L8.68935 11.4286C8.49935 11.6186 8.27935 12.0586 8.23935 12.3186L7.80935 15.3286C7.76935 15.6186 7.82935 15.8586 7.97935 16.0086C8.12935 16.1586 8.36935 16.2186 8.65935 16.1786L11.6693 15.7486C11.9293 15.7086 12.3793 15.4886 12.5593 15.2986L20.4393 7.41859C21.0893 6.76859 21.4293 6.18859 21.4793 5.64859C21.5393 4.99859 21.1993 4.30859 20.4393 3.53859C18.8393 1.93859 17.7393 2.38859 16.5693 3.54859Z"
                    fill="white"
                  />
                  <path
                    d="M19.8496 9.83027C19.7796 9.83027 19.7096 9.82027 19.6496 9.80027C17.0196 9.06027 14.9296 6.97027 14.1896 4.34027C14.0796 3.94027 14.3096 3.53027 14.7096 3.41027C15.1096 3.30027 15.5196 3.53027 15.6296 3.93027C16.2296 6.06027 17.9196 7.75027 20.0496 8.35027C20.4496 8.46027 20.6796 8.88027 20.5696 9.28027C20.4796 9.62027 20.1796 9.83027 19.8496 9.83027Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
            <div className="lg:w-[69.9%] w-full flex flex-col gap-[1.5rem]">
              <ControlledOutlineInput
                startAdornment={<PiUser />}
                fullWidth
                control={control}
                name="username"
                placeholder="Username"
                label="Username"
              />
              <ControlledOutlineInput
                startAdornment={<PiUser />}
                fullWidth
                control={control}
                name="first_name"
                placeholder="username"
                label="Stage Name"
              />
              <ControlledOutlineInput
                startAdornment={<PiUser />}
                fullWidth
                control={control}
                name="last_name"
                placeholder="name"
                label="Full Name"
              />
              <ControlledOutlineInput
                startAdornment={<PiUser />}
                fullWidth
                control={control}
                name="gender"
                placeholder="gender"
                label="Gender"
              />

              <textarea
                rows={3.5}
                placeholder="Bio"
                className="border rounded-lg py-[0.5rem] px-[1.25rem] border-border-primary"
              />
              <textarea
                rows={3.5}
                placeholder="About your company"
                className="border rounded-lg py-[0.5rem] px-[1.25rem] border-border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
