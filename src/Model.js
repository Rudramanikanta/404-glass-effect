import React from "react";
import { Float, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import Shards from "./shards.glb";
const Model = () => {
  const glass = useGLTF(Shards);
  console.log(glass);
  const textOption = {
    color: "white",
    anchorX: "center",
    anchorY: "middle",
  };
  return (
    <group>
      <Float>
        <mesh>
          {glass !== undefined &&
            glass.scenes[0].children.map((data) => {
              return (
                <mesh {...data}>
                  <MeshTransmissionMaterial
                    roughness={0}
                    transmission={0.99}
                    resolution={300}
                    ior={1.8}
                    chromaticAberration={0.75}
                    thickness={0.275}
                  ></MeshTransmissionMaterial>
                </mesh>
              );
            })}
        </mesh>
      </Float>
      <group>
        <Text {...textOption} fontSize={0.3} position={[0, 0, -0.1]}>
          404
        </Text>
        <Text {...textOption} position={[0, -.15, -.1]} fontSize={0.03}>
          link is down
        </Text>
      </group>
    </group>
  );
};

export default Model;
