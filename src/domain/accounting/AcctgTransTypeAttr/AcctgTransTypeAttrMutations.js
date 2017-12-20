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
import {AcctgTransTypeAttrInputType} from '../../accounting/AcctgTransTypeAttr/AcctgTransTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTransTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAcctgTransTypeAttr method',
  args:{acctgTransTypeAttrToBeAdded: {type: AcctgTransTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransTypeAttrs/add?`, args.acctgTransTypeAttrToBeAdded, req);
  }
};
export {createAcctgTransTypeAttr};


const deleteAcctgTransTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAcctgTransTypeAttrByIdUpdated method',
  args:{acctgTransTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTrans/acctgTransTypeAttrs/${args.acctgTransTypeAttrId}?`, null, req);
  }
};
export {deleteAcctgTransTypeAttrByIdUpdated};


const updateAcctgTransTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAcctgTransTypeAttr method',
  args:{acctgTransTypeAttrToBeUpdated: {type: AcctgTransTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTrans/acctgTransTypeAttrs/${args.attrName}?`, args.acctgTransTypeAttrToBeUpdated, req);
  }
};
export {updateAcctgTransTypeAttr};
