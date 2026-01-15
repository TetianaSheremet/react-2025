
import { IUser } from "../models/IUser.ts";

type UserProps = {
    user: IUser;
};

export const UserComponent = ({ user }: UserProps) => {
    return (
        <div>
            {user.id} {user.name}

        </div>
    );
};
