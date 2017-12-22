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

const AgreementProductApplResponseType = new GraphQLObjectType({
  name: 'AgreementProductApplResponseType',
  description: 'response type for AgreementProductAppl',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productId: {type: GraphQLString}
  })
});

export {AgreementProductApplResponseType};
    