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

const AgreementInputType = new GraphQLInputObjectType({
  name: 'AgreementInputType',
  description: 'input type for Agreement',

  fields: () => ({
    agreementDate: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    agreementTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    productId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    textData: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {AgreementInputType};
    