import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const colorList = ['#53DBAA', '#DB4B7C', '#7D2EEA', '#DB8830'];

const EgoModel = ({ setTextNum }) => {
    let index = 0;
    const [bgColor, setBgColor] = useState('#5FCFA4');
    const group = useRef()
    const { nodes, animations } = useGLTF('/assets/ego.glb')
    const { actions } = useAnimations(animations, group)

    const eyes = useRef()
    const mouth = useRef()
    const smooshie = useRef()

    const lightMap = new THREE.TextureLoader().load( 'assets/light.png' );

    const material = new THREE.MeshStandardMaterial({
        color: '#333333',
        lightMap: lightMap
    });

    const mat = new THREE.MeshStandardMaterial({
        color: bgColor,
        lightMap: lightMap,
    });
    //----------------------------------------------

    const changeColor = () => {
        setBgColor(colorList[index]);
        setTextNum(index);
        if (index < 3) {
            index = index + 1;
        } else {
            index = 0;
        }
    }

    useEffect(() => {
        if (eyes !== null) eyes.current.material = material
        if (mouth !== null) mouth.current.material = material
        if (smooshie !== null) smooshie.current.material = mat
    }, [smooshie, mouth, eyes, mat])

    useEffect(() => {
        changeColor();
        const interval = setInterval(() => {changeColor()}, 7500 / 4);
        actions.EyesAction.play()
        actions.Eyes_Key_Action.play()
        actions.MouthAction.play()
        actions.Mouth_Key_Action.play()
        actions.SmooshieAction.play()
        actions.Smooshie_Key_Action.play()
        return () => clearInterval(interval);
    }, [])

    return (
        <group ref={group}>
            <group position={[0,0,0]} rotation={[-Math.PI/2, 0, 0]}>
                <primitive ref={eyes} object={nodes.Eyes} />
                <primitive ref={mouth} object={nodes.Mouth} />
                <primitive ref={smooshie} object={nodes.Smooshie} />
            </group>
        </group >
    )
}

useGLTF.preload('/assets/ego-logo.glb')

export default EgoModel