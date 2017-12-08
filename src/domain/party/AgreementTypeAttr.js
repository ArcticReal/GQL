
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

import {AgreementTypeType} from '../party/AgreementType.js';


const AgreementTypeAttrType = new GraphQLObjectType({
  name: 'AgreementTypeAttrType',
  description: 'Type for AgreementTypeAttr in party',

  fields: () => ({
    agreementType: {
      type: AgreementTypeType,
      args : {agreementTypeId: {type: GraphQLString}},
      resolve: (agreementTypeAttr, args, {loaders}) => loaders.ofbiz.load(`agreementTypes/find?agreementTypeId=${agreementTypeAttr.agreementTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AgreementTypeAttrType};
    




const AgreementTypeAttrInputType = new GraphQLInputObjectType({
  name: 'AgreementTypeAttrInputType',
  description: 'input type for AgreementTypeAttr in party',

  fields: () => ({
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AgreementTypeAttrInputType};
    