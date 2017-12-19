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

const TrackingCodeTypeInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeTypeInputType',
  description: 'input type for TrackingCodeType',

  fields: () => ({
    description: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString}
  })
});

export {TrackingCodeTypeInputType};
    