
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

import {AgreementTermType} from '../../party/AgreementTerm/AgreementTermType.js';


const AgreementTermAttributeType = new GraphQLObjectType({
  name: 'AgreementTermAttributeType',
  description: 'Type for AgreementTermAttribute in party',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    agreementTerm: {
      type: AgreementTermType,
      args : {agreementTermId: {type: GraphQLString}},
      resolve: (agreementTermAttribute, args, {loaders}) => loaders.ofbiz.load(`party/agreement/agreementTerms/find?agreementTermId=${agreementTermAttribute.agreementTermId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {AgreementTermAttributeType};
    