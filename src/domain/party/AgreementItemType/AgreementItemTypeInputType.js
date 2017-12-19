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

const AgreementItemTypeInputType = new GraphQLInputObjectType({
  name: 'AgreementItemTypeInputType',
  description: 'input type for AgreementItemType',

  fields: () => ({
    agreementItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AgreementItemTypeInputType};
    