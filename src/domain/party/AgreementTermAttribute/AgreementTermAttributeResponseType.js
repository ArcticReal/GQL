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

const AgreementTermAttributeResponseType = new GraphQLObjectType({
  name: 'AgreementTermAttributeResponseType',
  description: 'response type for AgreementTermAttribute',

  fields: () => ({
    agreementTermId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AgreementTermAttributeResponseType};
    