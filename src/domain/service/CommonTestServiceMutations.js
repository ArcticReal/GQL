import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {KeyValueType} from '../../framework/helpTypes.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const blockingTestScv = {
  type: GraphQLString,
  description: 'mutation for ofbiz blockingTestScv method',
  args:{duration: {type: GraphQLInt},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/blockingTestScv?duration=${args.duration}message=${args.message}`, null, req);
  }
};
export {blockingTestScv};


const byteBufferTest = {
  type: GraphQLString,
  description: 'mutation for ofbiz byteBufferTest method',
  args:{byteBuffer2: {type: GraphQLString},byteBuffer1: {type: GraphQLString},saveAsFileName1: {type: GraphQLString},saveAsFileName2: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/byteBufferTest?byteBuffer2=${args.byteBuffer2}byteBuffer1=${args.byteBuffer1}saveAsFileName1=${args.saveAsFileName1}saveAsFileName2=${args.saveAsFileName2}`, null, req);
  }
};
export {byteBufferTest};


const conditionReturnFalse = {
  type: GraphQLString,
  description: 'mutation for ofbiz conditionReturnFalse method',
  args:{serviceContext: {type: GraphQLString},serviceName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/conditionReturnFalse?serviceContext=${args.serviceContext}serviceName=${args.serviceName}`, null, req);
  }
};
export {conditionReturnFalse};


const conditionReturnTrue = {
  type: GraphQLString,
  description: 'mutation for ofbiz conditionReturnTrue method',
  args:{serviceContext: {type: GraphQLString},serviceName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/conditionReturnTrue?serviceContext=${args.serviceContext}serviceName=${args.serviceName}`, null, req);
  }
};
export {conditionReturnTrue};


const entitySortTest = {
  type: GraphQLString,
  description: 'mutation for ofbiz entitySortTest method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/entitySortTest?`, null, req);
  }
};
export {entitySortTest};


const groupTest = {
  type: GraphQLString,
  description: 'mutation for ofbiz groupTest method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/groupTest?`, null, req);
  }
};
export {groupTest};


const makeALotOfVisits = {
  type: GraphQLString,
  description: 'mutation for ofbiz makeALotOfVisits method',
  args:{count: {type: GraphQLInt},rollback: {type: GraphQLBoolean}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/makeALotOfVisits?count=${args.count}rollback=${args.rollback}`, null, req);
  }
};
export {makeALotOfVisits};


const ping = {
  type: GraphQLString,
  description: 'mutation for ofbiz ping method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/ping?message=${args.message}`, null, req);
  }
};
export {ping};


const serviceStreamTest = {
  type: GraphQLString,
  description: 'mutation for ofbiz serviceStreamTest method',
  args:{inputStream: {type: GraphQLString},outputStream: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/serviceStreamTest?inputStream=${args.inputStream}outputStream=${args.outputStream}`, null, req);
  }
};
export {serviceStreamTest};


const simpleMapListTest = {
  type: GraphQLString,
  description: 'mutation for ofbiz simpleMapListTest method',
  args:{mapOfStrings: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/simpleMapListTest?listOfStrings=${args.listOfStrings}mapOfStrings=${args.mapOfStrings}`, null, req);
  }
};
export {simpleMapListTest};


const testCommit = {
  type: GraphQLString,
  description: 'mutation for ofbiz testCommit method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testCommit?message=${args.message}`, null, req);
  }
};
export {testCommit};


const testEntityFailure = {
  type: GraphQLString,
  description: 'mutation for ofbiz testEntityFailure method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testEntityFailure?`, null, req);
  }
};
export {testEntityFailure};


const testError = {
  type: GraphQLString,
  description: 'mutation for ofbiz testError method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testError?`, null, req);
  }
};
export {testError};


const testGroovy = {
  type: GraphQLString,
  description: 'mutation for ofbiz testGroovy method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testGroovy?message=${args.message}`, null, req);
  }
};
export {testGroovy};


const testGroovyMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz testGroovyMethod method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testGroovyMethod?message=${args.message}`, null, req);
  }
};
export {testGroovyMethod};


const testHttp = {
  type: GraphQLString,
  description: 'mutation for ofbiz testHttp method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testHttp?message=${args.message}`, null, req);
  }
};
export {testHttp};


const testJMSQueue = {
  type: GraphQLString,
  description: 'mutation for ofbiz testJMSQueue method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testJMSQueue?message=${args.message}`, null, req);
  }
};
export {testJMSQueue};


const testJMSTopic = {
  type: GraphQLString,
  description: 'mutation for ofbiz testJMSTopic method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testJMSTopic?message=${args.message}`, null, req);
  }
};
export {testJMSTopic};


const testJavaScript = {
  type: GraphQLString,
  description: 'mutation for ofbiz testJavaScript method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testJavaScript?message=${args.message}`, null, req);
  }
};
export {testJavaScript};


const testMca = {
  type: GraphQLString,
  description: 'mutation for ofbiz testMca method',
  args:{messageWrapper: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testMca?messageWrapper=${args.messageWrapper}`, null, req);
  }
};
export {testMca};


const testRemoteSoap = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRemoteSoap method',
  args:{defaultValue: {type: GraphQLFloat},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRemoteSoap?defaultValue=${args.defaultValue}message=${args.message}`, null, req);
  }
};
export {testRemoteSoap};


const testRemoteSoap1 = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRemoteSoap1 method',
  args:{ZipCode: {type: GraphQLString},invoke: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRemoteSoap1?ZipCode=${args.ZipCode}invoke=${args.invoke}`, null, req);
  }
};
export {testRemoteSoap1};


const testRemoteSoap2 = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRemoteSoap2 method',
  args:{invoke: {type: GraphQLString},CityName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRemoteSoap2?invoke=${args.invoke}CityName=${args.CityName}`, null, req);
  }
};
export {testRemoteSoap2};


const testRemoteSoap3 = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRemoteSoap3 method',
  args:{ZipCode: {type: GraphQLString},invoke: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRemoteSoap3?ZipCode=${args.ZipCode}invoke=${args.invoke}`, null, req);
  }
};
export {testRemoteSoap3};


const testRemoteSoap4 = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRemoteSoap4 method',
  args:{invoke: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRemoteSoap4?invoke=${args.invoke}`, null, req);
  }
};
export {testRemoteSoap4};


const testRmi = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRmi method',
  args:{defaultValue: {type: GraphQLFloat},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRmi?defaultValue=${args.defaultValue}message=${args.message}`, null, req);
  }
};
export {testRmi};


const testRollback = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRollback method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRollback?message=${args.message}`, null, req);
  }
};
export {testRollback};


const testRoute = {
  type: GraphQLString,
  description: 'mutation for ofbiz testRoute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testRoute?`, null, req);
  }
};
export {testRoute};


const testSOAPScv = {
  type: GraphQLString,
  description: 'mutation for ofbiz testSOAPScv method',
  args:{testing: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testSOAPScv?testing=${args.testing}`, null, req);
  }
};
export {testSOAPScv};


const testScriptEngineGroovy = {
  type: GraphQLString,
  description: 'mutation for ofbiz testScriptEngineGroovy method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testScriptEngineGroovy?message=${args.message}`, null, req);
  }
};
export {testScriptEngineGroovy};


const testScriptEngineGroovyMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz testScriptEngineGroovyMethod method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testScriptEngineGroovyMethod?message=${args.message}`, null, req);
  }
};
export {testScriptEngineGroovyMethod};


const testScriptEngineJavaScript = {
  type: GraphQLString,
  description: 'mutation for ofbiz testScriptEngineJavaScript method',
  args:{exampleId: {type: GraphQLString},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testScriptEngineJavaScript?exampleId=${args.exampleId}message=${args.message}`, null, req);
  }
};
export {testScriptEngineJavaScript};


const testScriptEngineJavaScriptFunction = {
  type: GraphQLString,
  description: 'mutation for ofbiz testScriptEngineJavaScriptFunction method',
  args:{message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testScriptEngineJavaScriptFunction?message=${args.message}`, null, req);
  }
};
export {testScriptEngineJavaScriptFunction};


const testScv = {
  type: GraphQLString,
  description: 'mutation for ofbiz testScv method',
  args:{defaultValue: {type: GraphQLFloat},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testScv?defaultValue=${args.defaultValue}message=${args.message}`, null, req);
  }
};
export {testScv};


const testSoap = {
  type: GraphQLString,
  description: 'mutation for ofbiz testSoap method',
  args:{testing: {type: new GraphQLList(KeyValueType)}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testSoap?testing=${args.testing}`, null, req);
  }
};
export {testSoap};


const testSoapSimple = {
  type: GraphQLString,
  description: 'mutation for ofbiz testSoapSimple method',
  args:{defaultValue: {type: GraphQLFloat},message: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/testSoapSimple?defaultValue=${args.defaultValue}message=${args.message}`, null, req);
  }
};
export {testSoapSimple};


const uploadContentTest = {
  type: GraphQLString,
  description: 'mutation for ofbiz uploadContentTest method',
  args:{uploadFile: {type: GraphQLString},_uploadFile_fileName: {type: GraphQLString},_uploadFile_contentType: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonTest/uploadContentTest?uploadFile=${args.uploadFile}_uploadFile_fileName=${args._uploadFile_fileName}_uploadFile_contentType=${args._uploadFile_contentType}`, null, req);
  }
};
export {uploadContentTest};
