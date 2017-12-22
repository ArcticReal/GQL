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
import {TermTypeAttrResponseType} from '../../party/TermTypeAttr/TermTypeAttrResponseType.js';
import {TermTypeAttrInputType} from '../../party/TermTypeAttr/TermTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTermTypeAttr = {
  type: TermTypeAttrResponseType,
  description: 'mutation for ofbiz createTermTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/termType/termTypeAttrs/add?`, null, req);
  }
};
export {createTermTypeAttr};


const updateTermTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTermTypeAttr method',
  args:{termTypeAttrToBeUpdated: {type: TermTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/termType/termTypeAttrs/${args.attrName}?`, args.termTypeAttrToBeUpdated, req);
  }
};
export {updateTermTypeAttr};


const deleteTermTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTermTypeAttrByIdUpdated method',
  args:{termTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/termType/termTypeAttrs/${args.termTypeAttrId}?`, null, req);
  }
};
export {deleteTermTypeAttrByIdUpdated};
