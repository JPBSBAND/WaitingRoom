/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, PositionalAudio } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["Cube-LeafSet"]: THREE.Mesh;
    ["Cube-Bark"]: THREE.Mesh;
    ["Cube-Pot"]: THREE.Mesh;
    polySurface15_1: THREE.Mesh;
    ["polySurface15-lambert1"]: THREE.Mesh;
    ["polySurface15-lambert3"]: THREE.Mesh;
    ["polySurface15-lambert2"]: THREE.Mesh;
    ["Sketchfab_model1-mat_poly081457b99e"]: THREE.Mesh;
    ["Sketchfab_model1-mat_silverfd5cae64"]: THREE.Mesh;
    ["Sketchfab_model-mat_poly081457b99e"]: THREE.Mesh;
    ["Sketchfab_model-mat_silverfd5cae64"]: THREE.Mesh;
    ["Sketchfab_model004-Glossy003"]: THREE.Mesh;
    ["Sketchfab_model004-Door"]: THREE.Mesh;
    strelka_mi_1: THREE.Mesh;
    ["strelka_mi-m1002"]: THREE.Mesh;
    ["strelka_mi-white_st002"]: THREE.Mesh;
    ["strelka_mi-st_gold002"]: THREE.Mesh;
    ["Fan_Light1-Mat_win"]: THREE.Mesh;
    ["Fan_Light1-m1002"]: THREE.Mesh;
    ["Fan_Light1-st_tile"]: THREE.Mesh;
    ["Sketchfab_model001-material"]: THREE.Mesh;
    ["Sketchfab_model001-Mat"]: THREE.Mesh;
    ["Sketchfab_model001-Leaf"]: THREE.Mesh;
    ["Sketchfab_model001-Dirt"]: THREE.Mesh;
    ["Sketchfab_model005-Metal1"]: THREE.Mesh;
    ["Sketchfab_model005-material003"]: THREE.Mesh;
    ["Sketchfab_model005-metal1"]: THREE.Mesh;
    ["Sketchfab_model005-Base"]: THREE.Mesh;
    ["Sketchfab_model005-SIGN"]: THREE.Mesh;
    stoolLPobj: THREE.Mesh;
    retro_computer_setup: THREE.Mesh;
    Radio_low: THREE.Mesh;
    SM_Plastic_Chair_01_78_LOD0: THREE.Mesh;
    Object_2: THREE.Mesh;
    Plane005: THREE.Mesh;
    Cylinder_DefaultMaterial_0: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Fan_Light_: THREE.Mesh;
  };
  materials: {
    LeafSet: THREE.MeshStandardMaterial;
    Bark: THREE.MeshStandardMaterial;
    Pot: THREE.MeshStandardMaterial;
    lambert1: THREE.MeshStandardMaterial;
    lambert3: THREE.MeshStandardMaterial;
    lambert2: THREE.MeshStandardMaterial;
    mat_poly081457b99e: THREE.MeshStandardMaterial;
    mat_silverfd5cae64: THREE.MeshStandardMaterial;
    ["Glossy.003"]: THREE.MeshStandardMaterial;
    Door: THREE.MeshStandardMaterial;
    ["m1.002"]: THREE.MeshStandardMaterial;
    ["white_st.002"]: THREE.MeshStandardMaterial;
    ["st_gold.002"]: THREE.MeshStandardMaterial;
    Mat_win: THREE.MeshStandardMaterial;
    st_tile: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Mat: THREE.MeshStandardMaterial;
    Leaf: THREE.MeshStandardMaterial;
    Dirt: THREE.MeshStandardMaterial;
    Metal1: THREE.MeshStandardMaterial;
    ["material.003"]: THREE.MeshStandardMaterial;
    metal1: THREE.MeshStandardMaterial;
    Base: THREE.MeshStandardMaterial;
    SIGN: THREE.MeshStandardMaterial;
    ["Mat.4"]: THREE.MeshStandardMaterial;
    retro_computer_setup_Mat: THREE.MeshStandardMaterial;
    T_Radio: THREE.MeshStandardMaterial;
    ["Mat.5"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    DefaultMaterial: THREE.MeshStandardMaterial;
    ["Mat.2"]: THREE.MeshStandardMaterial;
    ["Seychelles_Beige_Marble_wgildfbv.1"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "animation_0";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Jpbs2(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/jpbs2/jpbs2.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.animation_0?.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group
          name="Cube"
          position={[-746.35, -338.92, -1735.06]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            name="Cube-LeafSet"
            geometry={nodes["Cube-LeafSet"].geometry}
            material={materials.LeafSet}
            castShadow
          />
          <mesh
            name="Cube-Bark"
            geometry={nodes["Cube-Bark"].geometry}
            material={materials.Bark}
            castShadow
          />
          <mesh
            name="Cube-Pot"
            geometry={nodes["Cube-Pot"].geometry}
            material={materials.Pot}
            castShadow
          />
        </group>
        <group
          name="polySurface15"
          position={[-506.6, -604.89, -354.07]}
          rotation={[0, 1.57, 0]}
        >
          <mesh
            name="polySurface15_1"
            geometry={nodes.polySurface15_1.geometry}
            material={nodes.polySurface15_1.material}
            castShadow
          />
          <mesh
            name="polySurface15-lambert1"
            geometry={nodes["polySurface15-lambert1"].geometry}
            material={materials.lambert1}
            castShadow
          />
          <mesh
            name="polySurface15-lambert3"
            geometry={nodes["polySurface15-lambert3"].geometry}
            material={materials.lambert3}
            castShadow
          />
          <mesh
            name="polySurface15-lambert2"
            geometry={nodes["polySurface15-lambert2"].geometry}
            material={materials.lambert2}
            castShadow
          />
        </group>
        <group
          name="Sketchfab_model1"
          position={[-801.11, -570.34, -1335.48]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={3}
        >
          <mesh
            name="Sketchfab_model1-mat_poly081457b99e"
            geometry={nodes["Sketchfab_model1-mat_poly081457b99e"].geometry}
            material={materials.mat_poly081457b99e}
            castShadow
          />
          <mesh
            name="Sketchfab_model1-mat_silverfd5cae64"
            geometry={nodes["Sketchfab_model1-mat_silverfd5cae64"].geometry}
            material={materials.mat_silverfd5cae64}
            castShadow
          />
        </group>
        <group
          name="Sketchfab_model"
          position={[-374.94, -570.34, -1736.78]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={3}
        >
          <mesh
            name="Sketchfab_model-mat_poly081457b99e"
            geometry={nodes["Sketchfab_model-mat_poly081457b99e"].geometry}
            material={materials.mat_poly081457b99e}
            castShadow
          />
          <mesh
            name="Sketchfab_model-mat_silverfd5cae64"
            geometry={nodes["Sketchfab_model-mat_silverfd5cae64"].geometry}
            material={materials.mat_silverfd5cae64}
            castShadow
          />
        </group>
        <group name="Sketchfab_model004" position={[-901.52, -417.1, -888.2]}>
          <mesh
            name="Sketchfab_model004-Glossy003"
            geometry={nodes["Sketchfab_model004-Glossy003"].geometry}
            material={materials["Glossy.003"]}
            castShadow
          />
          <mesh
            name="Sketchfab_model004-Door"
            geometry={nodes["Sketchfab_model004-Door"].geometry}
            material={materials.Door}
            castShadow
          ><PositionalAudio url="/Door_ONSPOT.mp3" autoplay loop />
          </mesh>
        </group>
        <group
          name="strelka_mi"
          position={[-886, 169.65, -422.36]}
          rotation={[0, 1.57, 0]}
          scale={0.03}
        >
          <mesh
            name="strelka_mi_1"
            geometry={nodes.strelka_mi_1.geometry}
            material={nodes.strelka_mi_1.material}
            castShadow
          >
            <PositionalAudio url="/Clock_ONSPOT.mp3" autoplay loop distance={4}/>
          </mesh>
          <mesh
            name="strelka_mi-m1002"
            geometry={nodes["strelka_mi-m1002"].geometry}
            material={materials["m1.002"]}
            castShadow
          />
          <mesh
            name="strelka_mi-white_st002"
            geometry={nodes["strelka_mi-white_st002"].geometry}
            material={materials["white_st.002"]}
            castShadow
          />
          <mesh
            name="strelka_mi-st_gold002"
            geometry={nodes["strelka_mi-st_gold002"].geometry}
            material={materials["st_gold.002"]}
            castShadow
          />
        </group>
        <group
          name="Fan_Light1"
          position={[0, 1985.66, -1092.01]}
          scale={10.31}
        >
          <mesh
            name="Fan_Light1-Mat_win"
            geometry={nodes["Fan_Light1-Mat_win"].geometry}
            material={materials.Mat_win}
            castShadow
          />
          <mesh
            name="Fan_Light1-m1002"
            geometry={nodes["Fan_Light1-m1002"].geometry}
            material={materials["m1.002"]}
            castShadow
          />
          <mesh
            name="Fan_Light1-st_tile"
            geometry={nodes["Fan_Light1-st_tile"].geometry}
            material={materials.st_tile}
            castShadow
          />
        </group>
        <group
          name="Sketchfab_model001"
          position={[-740.29, -573, -192.32]}
          rotation={[0, 1.28, 0]}
        >
          <mesh
            name="Sketchfab_model001-material"
            geometry={nodes["Sketchfab_model001-material"].geometry}
            material={materials.material}
            castShadow
          />
          <mesh
            name="Sketchfab_model001-Mat"
            geometry={nodes["Sketchfab_model001-Mat"].geometry}
            material={materials.Mat}
            castShadow
          />
          <mesh
            name="Sketchfab_model001-Leaf"
            geometry={nodes["Sketchfab_model001-Leaf"].geometry}
            material={materials.Leaf}
            castShadow
          />
          <mesh
            name="Sketchfab_model001-Dirt"
            geometry={nodes["Sketchfab_model001-Dirt"].geometry}
            material={materials.Dirt}
            castShadow
          />
        </group>
        <group name="Sketchfab_model005" position={[-883.13, 114.49, -888.46]}>
          <mesh
            name="Sketchfab_model005-Metal1"
            geometry={nodes["Sketchfab_model005-Metal1"].geometry}
            material={materials.Metal1}
            castShadow
          />
          <mesh
            name="Sketchfab_model005-material003"
            geometry={nodes["Sketchfab_model005-material003"].geometry}
            material={materials["material.003"]}
            castShadow
          />
          <mesh
            name="Sketchfab_model005-metal1"
            geometry={nodes["Sketchfab_model005-metal1"].geometry}
            material={materials.metal1}
            castShadow
          />
          <mesh
            name="Sketchfab_model005-Base"
            geometry={nodes["Sketchfab_model005-Base"].geometry}
            material={materials.Base}
            castShadow
          />
          <mesh
            name="Sketchfab_model005-SIGN"
            geometry={nodes["Sketchfab_model005-SIGN"].geometry}
            material={materials.SIGN}
            castShadow
          />
        </group>
        <mesh
          name="stoolLPobj"
          geometry={nodes.stoolLPobj.geometry}
          material={materials["Mat.4"]}
          position={[-748.61, -567.14, -1728.17]}
          scale={50}
          castShadow
        />
        <mesh
          name="retro_computer_setup"
          geometry={nodes.retro_computer_setup.geometry}
          material={materials.retro_computer_setup_Mat}
          position={[-447.56, -336.86, -623.47]}
          rotation={[-Math.PI / 2, 0, -0.01]}
          castShadow
        />
        <mesh
          name="Radio_low"
          geometry={nodes.Radio_low.geometry}
          material={materials.T_Radio}
          position={[-218.05, -326.92, -572.6]}
          rotation={[0, 0.56, 0]}
          castShadow
        >
          <PositionalAudio url="/Radio_ONSPOT.mp3" autoplay loop distance={.5}/>
        </mesh>
        <mesh
          name="SM_Plastic_Chair_01_78_LOD0"
          geometry={nodes.SM_Plastic_Chair_01_78_LOD0.geometry}
          material={materials["Mat.5"]}
          position={[552.48, -564.51, -898.05]}
          castShadow
        />
        <mesh
          name="Object_2"
          geometry={nodes.Object_2.geometry}
          material={materials["white_st.002"]}
          position={[-256.45, -230.12, -198.47]}
          rotation={[-Math.PI, 1.42, -Math.PI]}
        >
          <mesh
            name="Plane005"
            geometry={nodes.Plane005.geometry}
            material={materials["Material.001"]}
            position={[-129.22, -161.09, 85.33]}
            rotation={[-1.16, 1.19, 1.13]}
            scale={21.64}
            castShadow
          />
        </mesh>
        <mesh
          name="Cylinder_DefaultMaterial_0"
          geometry={nodes.Cylinder_DefaultMaterial_0.geometry}
          material={materials.DefaultMaterial}
          position={[-430.35, -571.99, -372.1]}
          castShadow
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials["Mat.2"]}
          position={[0, -601.61, 544.04]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1000, 50, 600]}
          receiveShadow
        ><PositionalAudio url="/Room_ROOM.mp3" autoplay loop distance={5} />
        </mesh>
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials["Mat.2"]}
          position={[-949.98, -601.61, -430.23]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[600, 50, 600]}
          receiveShadow>
        </mesh>
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials["Mat.2"]}
          position={[0, -601.61, -1883.17]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1000, 50, 600]}
          receiveShadow
        ><PositionalAudio url="/Room_ROOM.mp3" autoplay loop distance={5} />
        </mesh>
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials["Mat.2"]}
          position={[955.27, -601.61, -430.23]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[600, 50, 600]}
          receiveShadow
        >
          <PositionalAudio url="/Room_ROOM.mp3" autoplay loop distance={5} />
        </mesh>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Seychelles_Beige_Marble_wgildfbv.1"]}
          position={[0, -597.01, -430.65]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1000, 600, 100]}
          receiveShadow
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials["Mat.2"]}
          position={[0, 2072.17, -430.65]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1000, 600, 100]}
          receiveShadow
        />
        <mesh
          name="Fan_Light_"
          geometry={nodes.Fan_Light_.geometry}
          material={materials["m1.002"]}
          position={[0, 1950.59, -1011.04]}
          rotation={[0, 0.02, 0]}
          scale={10.31}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/jpbs2/jpbs2.glb");