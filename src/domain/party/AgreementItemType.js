
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

import {AgreementItemType} from '../party/AgreementItem.js';
import {AgreementItemTypeAttrType} from '../party/AgreementItemTypeAttr.js';


const AgreementItemTypeType = new GraphQLObjectType({
  name: 'AgreementItemTypeType',
  description: 'Type for AgreementItemType in party',

  fields: () => ({
    parentType: {
      type: AgreementItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbiz.load(`agreementItemTypes/find?agreementItemTypeId=${agreementItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    agreementItemTypeId: {type: GraphQLString},
    agreementItemTypeAttrs: {
      type: new GraphQLList(AgreementItemTypeAttrType),
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementItemTypeAttrs/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    },
    agreementItems: {
      type: new GraphQLList(AgreementItemType),
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementItems/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    },
    agreementItemTypes: {
      type: new GraphQLList(AgreementItemTypeType),
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementItemTypes/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    }
  })
});

export {AgreementItemTypeType};
    




const AgreementItemTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementItemTypeInputType',
  description: 'input type for AgreementItemType in party',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    agreementItemTypeId: {type: GraphQLString}
  })
});

export {AgreementItemTypeInputType};
    