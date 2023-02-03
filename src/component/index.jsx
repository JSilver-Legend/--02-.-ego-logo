import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const colorList = ['#53DBAA', '#DB4B7C', '#7D2EEA', '#DB8830'];

const EgoModel = ({ isPlay, setIsPlay, setTextNum }) => {
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
        // setTimeout(() => {setBgColor(colorList[index])}, 1600)
        if (isPlay) {
            setBgColor(colorList[index]);
            setTextNum(index);
            if (index < 3) {
                index = index + 1;
            } else {
                index = 0;
            }
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {changeColor()}, 1950);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (eyes !== null) eyes.current.material = material
        if (mouth !== null) mouth.current.material = material
        if (smooshie !== null) smooshie.current.material = mat
    }, [smooshie, mouth, eyes, mat])

    useEffect(() => {
        const interval = setInterval(() => {changeColor()}, 1800);
        if (isPlay) {
            setTimeout(() => setIsPlay(false), 7500);
            actions.EyesAction.play()
            actions.Eyes_Key_Action.play()
            actions.MouthAction.play()
            actions.Mouth_Key_Action.play()
            actions.SmooshieAction.play()
            actions.Smooshie_Key_Action.play()
        } else {
            clearInterval(interval);
            actions.EyesAction.stop();
            actions.Eyes_Key_Action.stop();
            actions.MouthAction.stop();
            actions.Mouth_Key_Action.stop();
            actions.SmooshieAction.stop();
            actions.Smooshie_Key_Action.stop();
        }
        return () => clearInterval(interval);
    }, [isPlay])

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