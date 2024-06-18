import { Canvas } from '@react-three/fiber'
import { Root, Container } from '@react-three/uikit'
import { OrbitControls } from '@react-three/drei'
import Card from './components/Card'

export interface Agent {
    image: string;
    name: string;
    role: string;
    biography: string;
}

const agents: Agent[] = [
  {
    image: 'https://img.redbull.com/images/c_crop,x_991,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/2/16/bm7cdtb6xdhcibbweehq/valorant-omen',
    name: 'OMEN',
    role: 'CONTROLLER',
    biography: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.'
  },
  {
    image: 'https://img.redbull.com/images/c_crop,x_231,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/9/28/wgotviw3gjqzyj2u6ql2/jett-valorant',
    name: 'JETT',
    role: 'DUELIST',
    biography: 'Representing her home country of South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.'
  },
  {
    image: 'https://img.redbull.com/images/c_crop,x_1057,y_0,h_2160,w_1620/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/5/31/zxwpi7hkm1up0nd0p8lg/valorant-agent-viper',
    name: "VIPER",
    role: "CONTROLLER",
    biography: "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will."
  },
  {
    image: "https://img.redbull.com/images/c_crop,x_246,y_0,h_720,w_540/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/10/30/yrn6erzpnmlqnosjeaws/valorant-operator-killjoy",
    name: "KILLJOY",
    role: "SENTINEL",
    biography: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
    
  }
];


function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Root sizeX={8} sizeY={1} flexDirection="row" gap={16}>
        {agents.map((agent, index) => (
          <Card key={index} data={agent} /> 
        ))}
        {/* <Container hover={{
          backgroundColor: 'blue'
        }} onClick={handleClick} flexGrow={1} margin={margin} backgroundColor="green" />
        <Container flexGrow={1} margin={10} backgroundColor="blue" /> */}
      </Root>
    </Canvas>
  )
}

export default App
