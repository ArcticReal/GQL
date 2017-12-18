
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

import {AgreementType} from '../party/Agreement.js';


const AgreementAttributeType = new GraphQLObjectType({
  name: 'AgreementAttributeType',
  description: 'Type for AgreementAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementAttribute, args, {loaders}) => loaders.ofbiz.load(`party/agreements/find?agreementId=${agreementAttribute.agreementId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AgreementAttributeType};
    




const AgreementAttributeInputType = new GraphQLInputObjectType({
  name: 'AgreementAttributeInputType',
  description: 'input type for AgreementAttribute',

  fields: () => ({
    agreementId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AgreementAttributeInputType};
    