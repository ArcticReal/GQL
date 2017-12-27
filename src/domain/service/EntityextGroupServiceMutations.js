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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createEntityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz createEntityGroup method',
  args:{entityGroupId: {type: GraphQLString},entityGroupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextGroup/createEntityGroup?entityGroupId=${args.entityGroupId}&entityGroupName=${args.entityGroupName}&`, null, req);
  }
};
export {createEntityGroup};


const createEntityGroupEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz createEntityGroupEntry method',
  args:{entityOrPackage: {type: GraphQLString},entityGroupId: {type: GraphQLString},applEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextGroup/createEntityGroupEntry?entityOrPackage=${args.entityOrPackage}&entityGroupId=${args.entityGroupId}&applEnumId=${args.applEnumId}&`, null, req);
  }
};
export {createEntityGroupEntry};


const deleteEntityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteEntityGroup method',
  args:{entityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextGroup/deleteEntityGroup?entityGroupId=${args.entityGroupId}&`, null, req);
  }
};
export {deleteEntityGroup};


const deleteEntityGroupEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteEntityGroupEntry method',
  args:{entityOrPackage: {type: GraphQLString},entityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextGroup/deleteEntityGroupEntry?entityOrPackage=${args.entityOrPackage}&entityGroupId=${args.entityGroupId}&`, null, req);
  }
};
export {deleteEntityGroupEntry};


const updateEntityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEntityGroup method',
  args:{entityGroupId: {type: GraphQLString},entityGroupName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextGroup/updateEntityGroup?entityGroupId=${args.entityGroupId}&entityGroupName=${args.entityGroupName}&`, null, req);
  }
};
export {updateEntityGroup};


const updateEntityGroupEntry = {
  type: ResponseType,
  description: 'mutation for ofbiz updateEntityGroupEntry method',
  args:{entityOrPackage: {type: GraphQLString},entityGroupId: {type: GraphQLString},applEnumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextGroup/updateEntityGroupEntry?entityOrPackage=${args.entityOrPackage}&entityGroupId=${args.entityGroupId}&applEnumId=${args.applEnumId}&`, null, req);
  }
};
export {updateEntityGroupEntry};
