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

const SkillTypeResponseType = new GraphQLObjectType({
  name: 'SkillTypeResponseType',
  description: 'response type for SkillType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    skillTypeId: {type: GraphQLString}
  })
});

export {SkillTypeResponseType};
    