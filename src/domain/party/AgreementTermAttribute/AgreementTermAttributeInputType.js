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

const AgreementTermAttributeInputType = new GraphQLInputObjectType({
  name: 'AgreementTermAttributeInputType',
  description: 'input type for AgreementTermAttribute',

  fields: () => ({
    agreementTermId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString}
  })
});

export {AgreementTermAttributeInputType};
    