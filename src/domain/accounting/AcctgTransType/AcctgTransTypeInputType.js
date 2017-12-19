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

const AcctgTransTypeInputType = new GraphQLInputObjectType({
  name: 'AcctgTransTypeInputType',
  description: 'input type for AcctgTransType',

  fields: () => ({
    acctgTransTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {AcctgTransTypeInputType};
    