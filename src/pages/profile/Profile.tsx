import React from "react";
import * as SC from "./profile.style";
import ProfileMenu from "../../components/profileMenu/ProfileMenu";

function Profile() {
  return (
    <SC.Container>
      <ProfileMenu page="profile" />
    </SC.Container>
  );
}

export default Profile;
