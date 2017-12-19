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

const AgreementRoleInputType = new GraphQLInputObjectType({
  name: 'AgreementRoleInputType',
  description: 'input type for AgreementRole',

  fields: () => ({
    agreementId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {AgreementRoleInputType};
    