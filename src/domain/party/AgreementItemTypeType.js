
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AgreementItemType} from '../party/AgreementItemType.js';
import {AgreementItemTypeAttrType} from '../party/AgreementItemTypeAttrType.js';


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
    agreementItemTypeAttr: {
      type: new GraphQLList(AgreementItemTypeAttrType),
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementItemTypeAttrs/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    },
    agreementItem: {
      type: new GraphQLList(AgreementItemType),
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementItems/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    },
    agreementItemType: {
      type: new GraphQLList(AgreementItemTypeType),
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`agreementItemTypes/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    }
  })
});

export {AgreementItemTypeType};
    