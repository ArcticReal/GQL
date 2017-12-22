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

const AgreementPromoApplResponseType = new GraphQLObjectType({
  name: 'AgreementPromoApplResponseType',
  description: 'response type for AgreementPromoAppl',

  fields: () => ({
    agreementId: {type: GraphQLString},
    agreementItemSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementPromoApplResponseType};
    