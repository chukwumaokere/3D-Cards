import { Agent } from '../App';
import { Container, DefaultProperties, Image, Text } from '@react-three/uikit';

export default function Card({data}: {data: Agent}) {
    return (
        <Container 
            width={256}
            height={256} 
            cursor={'pointer'}
            borderRadius={24}
            castShadow={true}
            onClick={(e) => {
                console.log(e);
                console.log(`Clicked ${data.name}`)
            }}
        >
            <Container
                width={'100%'}
                height={'100%'}
            >
                {/* <CardFront {...data} /> */}
                <CardBack {...data} />
            </Container>
        </Container>
    );
}


function CardBack({biography, role, name}: Agent) {
    return (
        <Container
            display={'flex'}
            flexDirection={'column'} 
            backgroundColor={'#0F1823'}
            backgroundOpacity={0.95}
            borderRadius={12}
            overflow={'hidden'}
            padding={10}
        >
            <DefaultProperties color='white'>
                <Container display={'flex'}>
                    <Text fontWeight={'bold'} fontSize={12}>AGENT | {name.toUpperCase()}</Text>
                </Container>
                <Container display={'flex'} flexDirection={'column'}>
                    <Text fontSize={8} fontWeight={'bold'} marginY={8}>
                        // ROLE
                    </Text>
                    <Text fontSize={12} fontWeight={'bold'}>
                        {role.toUpperCase()} 
                    </Text>
                </Container>
                <Container display={'flex'} flexDirection={'column'}>
                    <Text fontWeight={'bold'} fontSize={8} marginY={8}>
                        // BIOGRAPHY
                    </Text>
                    <Text fontSize={8} fontWeight={'medium'}>
                        {biography}
                    </Text>
                </Container>
            </DefaultProperties>
        </Container>
    );
}
  
function CardFront({image}: {image: string}) {
    return (
        <Container
            width={'100%'}
            height={'100%'}
            borderRadius={24}
            overflow={'hidden'}
            hover={{backgroundOpacity: 0.85}}
        >
            <Image src={image} width={'auto'} height={'auto'} />
        </Container>
    );
}