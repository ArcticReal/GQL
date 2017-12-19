
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

import {AgreementItemType} from '../../party/AgreementItem/AgreementItemType.js';
import {AgreementItemTypeAttrType} from '../../party/AgreementItemTypeAttr/AgreementItemTypeAttrType.js';


const AgreementItemTypeType = new GraphQLObjectType({
  name: 'AgreementItemTypeType',
  description: 'Type for AgreementItemType in party',

  fields: () => ({
    parentType: {
      type: AgreementItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItemTypes/find?agreementItemTypeId=${agreementItemType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    agreementItemTypeId: {type: GraphQLString},
    agreementItemTypeAttrs: {
      type: new GraphQLList(AgreementItemTypeAttrType),
      args : {},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementItemTypeAttrs/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    },
    agreementItems: {
      type: new GraphQLList(AgreementItemType),
      args : {},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementItems/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    },
    agreementItemTypes: {
      type: new GraphQLList(AgreementItemTypeType),
      args : {},
      resolve: (agreementItemType, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementItemTypes/find?agreementItemTypeId=${agreementItemType.agreementItemTypeId}`)
    }
  })
});

export {AgreementItemTypeType};
    