
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

import {AgreementItemTypeType} from '../party/AgreementItemType.js';


const AgreementItemTypeAttrType = new GraphQLObjectType({
  name: 'AgreementItemTypeAttrType',
  description: 'Type for AgreementItemTypeAttr in party',

  fields: () => ({
    description: {type: GraphQLString},
    agreementItemType: {
      type: AgreementItemTypeType,
      args : {agreementItemTypeId: {type: GraphQLString}},
      resolve: (agreementItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementItemTypes/find?agreementItemTypeId=${agreementItemTypeAttr.agreementItemTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {AgreementItemTypeAttrType};
    




const AgreementItemTypeAttrInputType = new GraphQLInputObjectType({
  name: 'AgreementItemTypeAttrInputType',
  description: 'input type for AgreementItemTypeAttr',

  fields: () => ({
    agreementItemTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {AgreementItemTypeAttrInputType};
    