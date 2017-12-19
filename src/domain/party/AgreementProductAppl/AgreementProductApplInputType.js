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

const AgreementProductApplInputType = new GraphQLInputObjectType({
  name: 'AgreementProductApplInputType',
  description: 'input type for AgreementProductAppl',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productId: {type: GraphQLString}
  })
});

export {AgreementProductApplInputType};
    