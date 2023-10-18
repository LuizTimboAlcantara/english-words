import React, { Fragment } from "react";
import { View } from "react-native";

import Skeleton from "@components/skeleton";

interface SkeletonTeamProps {
  repeat: number;
}

const SkeletonTeam = ({ repeat }: SkeletonTeamProps) => {
  return (
    <View style={{ flex: 1 }}>
      {Array.from({ length: repeat }, (_, index) => (
        <Fragment key={index}>
          <View
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Skeleton width={150} height={50} style={{ borderRadius: 10 }} />
            <Skeleton width={150} height={50} style={{ borderRadius: 10 }} />
          </View>
        </Fragment>
      ))}
    </View>
  );
};

export default SkeletonTeam;
