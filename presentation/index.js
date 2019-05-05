/* eslint-disable */
import React from 'react';

// Import Spectacle Core tags
import {
    Fit,
    List,
    ListItem,
    Deck,
    Heading,
    Quote,
    Slide,
    CodePane,
    Text,
    Image,
    Layout,
    Fill,
    Link,
    Appear
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
    todo: require('../assets/TODO.jpg'),
    ASTTree: require('../assets/AST.jpg'),
    ASTCode: require('../assets/AST-Code.png'),
    compilerIO: require('../assets/compilerIO.jpg'),
    slide6a: require('../assets/slide6a.jpg'),
    slide6b: require('../assets/slide6b.jpg'),
    slide6c: require('../assets/slide6c.jpg'),
    slide7a: require('../assets/slide7a.jpg'),
    slide7b: require('../assets/slide7b.jpg'),
    programsplit: require('../assets/programsplit.jpg'),
    firstlinesplit: require('../assets/firstlinesplit.jpg'),
    secondlinesplit: require('../assets/secondlinesplit.jpg'),
    thirdlinesplit: require('../assets/thirdlinesplit.jpg'),
    static: require('../assets/static.jpg'),
    compiler: require('../assets/compiler.png'),
    celebration: require('../assets/celebration.gif')
};

preloader(images);

const theme = createTheme({
    primary: 'black',
    title: 'rgb(1, 170, 255)',
    secondary: '#ffd900',
    tertiary: 'white'
}, {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    });

const ASTCode = `
    function abs(number) {
        if (number >= 0) {  // test
        return number;  // consequent
        } else {
        return -number; // alternate
        }
    }
`;

const ESLINTCode = `
    module.exports = {
        meta: {
            type: "suggestion",
    
            docs: {
                description: "disallow unnecessary semicolons",
                category: "Possible Errors",
                recommended: true,
                url: "https://eslint.org/docs/rules/no-extra-semi"
            },
            fixable: "code",
            schema: [] // no options
        },
        create: function(context) {
            return {
                // callback functions
            };
        }
    }
`;

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} progress="pacman" controls>
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="title">
                        Javascript AST的入门与应用
          </Heading>
                    <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
                        从Javascript的静态分析开始
          </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    {/* <Text margin="0 0 40px" size={10} textColor="secondary">Pavithra Kodmad</Text> */}
                    <Image src={images.todo} height="600" />
                    {/* <Layout>
            <Fill><Image src={images.flipkart} /></Fill>
            <Fill><Image src={images.india} width="400" height="400" /></Fill>
          </Layout> */}
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Image src={images.ASTTree} height="300" />
                    <List>
                        <Appear><ListItem>javascript object represents source code</ListItem></Appear>
                        <Appear><ListItem>specific to a language</ListItem></Appear>
                        <Appear><ListItem>should convert to working source code</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading textColor="title">Trees</Heading>
                    <Layout>
                        <Appear><Fill><Image src={images.slide6a} height="200" /></Fill></Appear>
                        <Appear><Fill><Image src={images.slide6b} height="200" /></Fill></Appear>
                        <Appear><Fill><Image src={images.slide6c} height="200" /></Fill></Appear>
                    </Layout>
                </Slide>
                {/* <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Quote>An Abstract Syntax Tree is a data structure that represents source code.</Quote>
                </Slide> */}
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Image src={images.slide7a} height="400" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Image src={images.programsplit} height="300" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Image src={images.firstlinesplit} height="300" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Image src={images.secondlinesplit} height="300" width="700" />
                </Slide>
                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Image src={images.thirdlinesplit} height="400" width="800" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Layout>
                        <Fill>
                            <CodePane source={ASTCode} lang="js" height="400" />
                        </Fill>
                        <Fill style={{ marginLeft: 20, marginTop: '-0.5rem' }}>
                            <Appear>
                                <Image src={images.ASTCode} width="600" height="400" />
                            </Appear>
                        </Fill>
                    </Layout>
                    <Appear>
                        <Link href="https://resources.jointjs.com/demos/javascript-ast" target="_blank" style={{ color: 'white' }}>JointJS: JavaScript AST Visualizer</Link>
                    </Appear>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading textColor="title">Why ASTs?</Heading>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="secondary">
                    <Image src={images.static} height="300" width="800" />
                    <p>
                        <Link href="https://github.com/binast/binjs-ref" target="_blank">Binaray AST</Link>
                    </p>
                    <p>
                        <Link href="https://tc39.github.io/proposal-binary-ast/" target="_blank">TC39 Proposal</Link>
                    </p>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="title" caps>大多数编译器的主要阶段</Heading>
                    <List>
                        <Appear><ListItem><span style={{ color: 'blue' }}>PARSE</span> code to AST</ListItem></Appear>
                        <Appear><ListItem><span style={{ color: 'blue' }}>Tranform</span> AST to another AST</ListItem></Appear>
                        <Appear><ListItem><span style={{ color: 'blue' }}>GENERATE</span> AST to code</ListItem></Appear>
                    </List>
                    <Appear>
                        <Image src={images.compiler} height="300" />
                    </Appear>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="title" caps>AST是计算机与人类的桥梁</Heading>
                    <Layout>
                        <Fit style={{ marginRight: 12, marginTop: 40 }}>
                            <Image src={images.compilerIO} height="200" />
                        </Fit>
                        <Fill>
                            <List>
                                <Appear><ListItem>tokenize</ListItem></Appear>
                                <Appear><ListItem>parse</ListItem></Appear>
                                <Appear><ListItem>transform: recast/babel etc.</ListItem></Appear>
                                <Appear><ListItem>traversal: deep first、vistor pattern</ListItem></Appear>
                                <Appear><ListItem>generation: jscodeshift</ListItem></Appear>
                            </List>
                        </Fill>
                    </Layout>
                    <Appear>
                        <Link href="https://www.youtube.com/watch?v=Tar4WgAfMr4" target="_blank" style={{ color: 'white' }}>EmberConf 2016: How to Build a Compiler by James Kyle</Link>
                    </Appear>
                </Slide>
                <CodeSlide
                    transition={['fade']}
                    lang="js"
                    code={require('raw-loader!./code-example')}
                    textSize=".75em"
                    ranges={[
                        {loc: [0, 4], title: '引入依赖'},
                        {loc: [5, 9], title: '解析'},
                        {loc: [9, 11], title: '遍历'},
                        {loc: [11, 23], title: '访问器'},
                        {loc: [24, 25], title: '用visitor遍历AST'},
                        {loc: [25, 27], title: 'output生成代码'}
                    ]}
                />

                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="title">为什么我们需要ESLint</Heading>
                    <List>
                        <Appear><ListItem>对代码进行静态分析，发现潜在问题</ListItem></Appear>
                        <Appear><ListItem>追求最佳实践</ListItem></Appear>
                        <Appear><ListItem>团队风格一致性</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={8} textColor="title">ESLint特点</Heading>
                    <List>
                        <Appear><ListItem>自定义规则</ListItem></Appear>
                        <Appear><ListItem>自定义格式</ListItem></Appear>
                        <Appear><ListItem>自定义解析器</ListItem></Appear>
                        <Appear><ListItem>规则开/关</ListItem></Appear>
                        <Appear><ListItem>设置错误类型</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={8} textColor="title">ESLint规则基本代码结构</Heading>
                    <CodePane style={{ marginTop: 20 }} source={ESLINTCode} lang="js" height="400" />
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading textColor="title">Demo</Heading>
                    <List>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/3e162daf2dfb7f6146f40a3a5d69ba07/a1a87c1337cb792cda878ec37d981054ecf6eac4">
                                no-console
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/464f2009e4ab2a8261b88197521e9647/c0a0aa474482498fba7cd22959b335084b7210e9"
                            >piggyback</Link>
                        </ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading textColor="title">Babel</Heading>
                    <List>
                        <Appear><ListItem>将ESNext转换为ESNow</ListItem></Appear>
                        <Appear><ListItem>Plugins由上至下</ListItem></Appear>
                        <Appear><ListItem>Presets逆序解析</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading textColor="title">Demo</Heading>
                    <List>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/84aa091403629f42ec86bc038378b5be/a5bbcba8ffbf084e9ba793beef044ac399e6de9d">
                                arrowToFunc
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/c99ad224e1ff4e0b368db750a863abca/7987b82ea29cb8be844c420b72025bfbc5455721"
                            >captainLog</Link>
                        </ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" >
                    <Heading size={1} fit textColor="title">What are codemods</Heading>
                    <Appear>
                        <Quote margin="20px 0 30px" textSize={36} textColor="tertiary" bold>
                            Codemod is a tool/library to assist you with large-scale codebase refactors that can be partially automated but still require human oversight and occasional intervention.</Quote>
                    </Appear>
                    <Appear>
                        <Text size={1} textColor="secondary" fit>一种基于抽象语法树（AST）的代码自动化重构工具</Text>
                    </Appear>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" >
                    <Heading size={1} fit textColor="title">Codemods</Heading>
                    <List>
                        <Appear><ListItem>Better than find/replace</ListItem></Appear>
                        <Appear><ListItem>no matter how good your regex skills are...</ListItem></Appear>
                        <Appear>
                            <ListItem>
                                react-codemod/5to6-codemod/jest-codemods/ava-codemods
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" >
                    <Heading size={1} fit textColor="title">What is jscodeshift</Heading>
                    <List>
                        <Appear><ListItem>A runner, which executes the provided transform for each file passed to it.</ListItem></Appear>
                        <Appear><ListItem>A wrapper around recast, providing a different API.</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading textColor="title">Demo</Heading>
                    <List>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/cc11a2431c591cd0bfdc79f750204f7f/639b06d551d3a0bbf13906414c7ad055291325e2"
                            >ymnnjquery(codemod)</Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/cc11a2431c591cd0bfdc79f750204f7f/5f3191b951b6a8d5b483444afd8485fe8dc730c7">
                                objectMerge
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                _target="_blank"
                                style={{ color: 'white' }}
                                href="https://astexplorer.net/#/gist/cc11a2431c591cd0bfdc79f750204f7f/8f6b2f9483bd96fdedfa99b3d8397d76fb9e40a5"
                            >transform-log&var</Link>
                        </ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Image src={images.celebration} width='100%' />
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={1} textColor="title">Resources</Heading>
                    <List>
                        <ListItem><Link
                            href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md" target="_blank">babel-handbook
                        </Link></ListItem>
                        <ListItem><Link
                            href="https://zhuanlan.zhihu.com/p/32189701" target="_blank">AST in Modern JavaScript
                        </Link></ListItem>
                        <ListItem><Link
                            href="https://blog.ymfe.org/jscodeshift%20%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97/" target="_blank">jscodeshift入门指南
                        </Link></ListItem>
                        <ListItem><Link
                            href="https://dev.tube/video/wbS7M9laebM" target="_blank">Making the Web Faster with the JS binary AST
                        </Link></ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading caps textColor="title">Thank you</Heading>
                    <Link href="https://twitter.com/Shawb_Wong" target="_blank">@Shawb Wong</Link>
                </Slide>
            </Deck>
        );
    }
}
